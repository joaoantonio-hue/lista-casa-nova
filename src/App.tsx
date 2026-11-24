import { useEffect, useMemo, useState } from "react";
import { itens, type Item } from "./data/itens";
import { icones } from "./icones";
import { config } from "./config";

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const faixa = (it: Item) =>
  it.tipo === "cota" ? `Meta de ${brl(it.meta ?? 0)}` : it.de ? `De ${brl(it.de)} a ${brl(it.ate ?? it.de)}` : "Valor a combinar";

function lojas(it: Item) {
  const q = encodeURIComponent(it.busca);
  return [
    { nome: "Amazon", url: `https://www.amazon.com.br/s?k=${q}` },
    { nome: "Mercado Livre", url: `https://lista.mercadolivre.com.br/${q}` },
    { nome: "Magalu", url: `https://www.magazineluiza.com.br/busca/${q}/` },
    { nome: "Shopee", url: `https://shopee.com.br/search?keyword=${q}` },
  ];
}

function Arte({ it, grande = false }: { it: Item; grande?: boolean }) {
  return (
    <div className={`arte ${grande ? "grande" : ""} ${it.foto ? "foto" : ""}`} data-comodo={it.comodo}>
      {it.foto ? (
        <img src={it.foto} alt={it.nome} loading="lazy" />
      ) : (
        <span className="icone" dangerouslySetInnerHTML={{ __html: icones[it.id] ?? icones.presente }} />
      )}
    </div>
  );
}

function Capa({ onIniciar }: { onIniciar: () => void }) {
  return (
    <main className="capa">
      <figure className="polaroid">
        <span className="fita" aria-hidden="true" />
        <img src="/fotos/nos.jpg" alt="André e João" onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
        <figcaption>nós dois, e agora uma casa</figcaption>
      </figure>
      <div className="carta">
        <p className="sobre">{config.nomes}</p>
        <h1>Vocês fazem parte da nossa história.</h1>
        <p>
          Cada um de vocês esteve com a gente em algum pedaço desse caminho: nas risadas, nos conselhos, nos dias difíceis e nos dias bons.
          Agora a gente está montando o nosso cantinho, e queria que ele tivesse um pouco de vocês também.
        </p>
        <p>
          Em cada panela, em cada café da manhã, em cada almoço de domingo, vamos lembrar de quem ajudou a construir essa casa com a gente.
          Aqui está o que ainda falta. Escolha o que tocar o seu coração.
        </p>
        <p className="assinatura">com carinho, André e João</p>
        <button className="btn grande" onClick={onIniciar}>Ajudar a montar nossa casa</button>
      </div>
    </main>
  );
}

type Reserva = { id: string; nome: string; valor?: number };
const CHAVE = "casa-nova-reservas";
function lerReservas(): Reserva[] {
  try { return JSON.parse(localStorage.getItem(CHAVE) || "[]"); } catch { return []; }
}

function Painel({ it, onFechar, onReservar, jaReservou }: { it: Item; onFechar: () => void; onReservar: (r: Reserva) => void; jaReservou: boolean }) {
  const [nome, setNome] = useState("");
  const [recado, setRecado] = useState("");
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState<string | null>(null);
  const cota = it.tipo === "cota";

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onFechar();
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onFechar]);

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim()) return setErro("Escreva o seu nome.");
    const v = Math.round(Number(valor));
    if (cota && !(v >= 10)) return setErro("Escolha um valor a partir de R$ 10.");
    const msg = cota
      ? `Oi, ${config.nomes}! Aqui é ${nome.trim()}. Quero ajudar com uma cota de ${brl(v)} para: ${it.nome}.${recado.trim() ? `\n\nRecado: ${recado.trim()}` : ""}`
      : `Oi, ${config.nomes}! Aqui é ${nome.trim()}. Vou dar de presente: ${it.nome}.${recado.trim() ? `\n\nRecado: ${recado.trim()}` : ""}`;
    onReservar({ id: it.id, nome: nome.trim(), valor: cota ? v : undefined });
    if (config.whatsapp) window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setEnviado(msg);
  }

  return (
    <div className="fundo" onClick={onFechar}>
      <div className="painel" role="dialog" aria-modal="true" aria-label={it.nome} onClick={(e) => e.stopPropagation()}>
        <button className="fechar" onClick={onFechar} aria-label="Fechar">×</button>
        <Arte it={it} grande />
        <div className="painel-in">
          {enviado ? (
            <div className="obrigado">
              <div className="coracao">♥</div>
              <h3>Obrigado, {nome.trim()}!</h3>
              <p>{config.whatsapp ? "Abrimos o WhatsApp com a sua mensagem. É só tocar em enviar." : "Guardamos sua escolha. Se quiser, copie a mensagem abaixo e mande para a gente."}</p>
              {!config.whatsapp && <textarea readOnly value={enviado} rows={4} onFocus={(e) => e.currentTarget.select()} />}
              <button className="btn" onClick={onFechar}>Voltar para a lista</button>
            </div>
          ) : (
            <>
              <span className={`selo ${cota ? "cota" : ""}`}>{cota ? "Presente em conjunto" : it.comodo}</span>
              <h3>{it.nome}</h3>
              <p className="faixa">{faixa(it)}</p>
              {it.marcas && <p className="marcas"><b>Marcas e modelos:</b> {it.marcas}</p>}
              {it.nota && <p className="nota">{it.nota}</p>}
              <div className="lojas">
                {it.link && <a className="loja destaque" href={it.link} target="_blank" rel="noopener">Ver o produto</a>}
                {lojas(it).map((l) => <a key={l.nome} className="loja" href={l.url} target="_blank" rel="noopener">{l.nome}</a>)}
              </div>
              {jaReservou && <p className="aviso">Você já escolheu este presente neste aparelho.</p>}
              <form className="form" onSubmit={enviar} noValidate>
                <h4>{cota ? "Quero ajudar com uma parte" : "Esse presente é meu"}</h4>
                <label>Seu nome<input value={nome} onChange={(e) => setNome(e.target.value)} maxLength={60} autoComplete="name" /></label>
                <label>Presente<input value={it.nome} readOnly /></label>
                {cota && (
                  <>
                    <label>Valor da cota (R$)<input type="number" inputMode="numeric" min={10} value={valor} onChange={(e) => setValor(e.target.value)} /></label>
                    <div className="rapidos">{[50, 100, 200].map((v) => <button type="button" key={v} onClick={() => setValor(String(v))}>{brl(v)}</button>)}</div>
                  </>
                )}
                <label>Recado (opcional)<textarea rows={3} maxLength={300} value={recado} onChange={(e) => setRecado(e.target.value)} /></label>
                {erro && <p className="erro">{erro}</p>}
                <button className="btn" type="submit">{cota ? "Confirmar minha parte" : "Confirmar presente"}</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Lista({ onVoltar }: { onVoltar: () => void }) {
  const [comodo, setComodo] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [aberto, setAberto] = useState<Item | null>(null);
  const [reservas, setReservas] = useState<Reserva[]>(lerReservas);
  const comodos = useMemo(() => ["Todos", ...new Set(itens.map((i) => i.comodo))], []);
  const visiveis = itens.filter(
    (i) => (comodo === "Todos" || i.comodo === comodo) && (!busca || `${i.nome} ${i.marcas}`.toLowerCase().includes(busca.toLowerCase())),
  );

  function reservar(r: Reserva) {
    const novo = [...reservas, r];
    setReservas(novo);
    try { localStorage.setItem(CHAVE, JSON.stringify(novo)); } catch { /* sem armazenamento */ }
  }

  return (
    <div className="lista">
      <header className="topo">
        <button className="voltar" onClick={onVoltar} aria-label="Voltar para a capa">←</button>
        <div>
          <p className="sobre">o que falta no nosso cantinho</p>
          <h2>{config.nomes}</h2>
        </div>
      </header>
      <div className="ferramentas">
        <input className="buscar" type="search" placeholder="Buscar presente ou marca" value={busca} onChange={(e) => setBusca(e.target.value)} aria-label="Buscar" />
        <div className="chips" role="group" aria-label="Cômodos">
          {comodos.map((c) => (
            <button key={c} className="chip" aria-pressed={c === comodo} onClick={() => setComodo(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="grade">
        {visiveis.map((it, n) => {
          const meu = reservas.some((r) => r.id === it.id);
          return (
            <button key={it.id} className="cartao" style={{ ["--n" as string]: Math.min(n, 16) }} onClick={() => setAberto(it)}>
              <span className="furo" aria-hidden="true" />
              <Arte it={it} />
              {it.tipo === "cota" && <span className="selo cota flutua">Em conjunto</span>}
              {meu && <span className="selo meu flutua">Você escolheu</span>}
              <span className="cartao-in">
                <span className="nome">{it.nome}</span>
                <span className="preco">{faixa(it)}</span>
              </span>
            </button>
          );
        })}
      </div>
      {!visiveis.length && <p className="vazio">Nenhum presente encontrado.</p>}
      {config.pix && (
        <div className="pix">Prefere mandar um valor? Nossa chave Pix: <b>{config.pix}</b></div>
      )}
      <footer>Os valores são aproximados. Os botões das lojas abrem a busca do produto, então fique à vontade para escolher onde comprar.</footer>
      {aberto && (
        <Painel it={aberto} onFechar={() => setAberto(null)} onReservar={reservar} jaReservou={reservas.some((r) => r.id === aberto.id)} />
      )}
    </div>
  );
}

export default function App() {
  const [tela, setTela] = useState<"capa" | "lista">(() => (location.hash === "#lista" ? "lista" : "capa"));
  useEffect(() => {
    const f = () => setTela(location.hash === "#lista" ? "lista" : "capa");
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  const ir = (t: "capa" | "lista") => { location.hash = t === "lista" ? "lista" : ""; setTela(t); window.scrollTo(0, 0); };
  return tela === "capa" ? <Capa onIniciar={() => ir("lista")} /> : <Lista onVoltar={() => ir("capa")} />;
}
