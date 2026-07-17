import CartaoPerfeil1 from '@/components/CartaoPerfil1';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


export default function Turma() {
    return (
    <div>
            <Header />
            <>{/* aqui vão os cards dos alunos */}
      <h2 className="text-xl font-bold text-slate-800">Turma 2026</h2></>
        <CartaoPerfeil1 />
        <Footer/>      
    </div>
    );
}