import Banner from '@/components/Banner/Banner'
import Services from '@/components/Services/Services'
import Form from '@/components/Form/Form'

export const metadata = {
  title: "Diogène Nettoyage - Nettoyage spécialisé et désinfection",
  description: "Diogène Nettoyage : Nettoyage spécialisé après décès, syndrome de Diogène et désinfection. Intervention rapide dans toute la France."
}


export default function Home() {
  return (
    <div >
      <main >
       <Banner />
       <Services />
       <Form />
      </main>  
    </div>
  );
}
