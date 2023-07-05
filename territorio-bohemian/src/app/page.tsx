import Banner from "@/components/Banner/Banner"
import HomeTitle from "@/components/HomeTitle/HomeTitle"
import InfoCard from "@/components/InfoCard/InfoCard"
import ButtonCard from "@/components/ButtonCard/ButtonCard"
import SectionCard from '@/components/SectionCard/SectionCard'

export default function Home() {

  const infoCardText = {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis perferendis, natus vel ullam quod sit ea saepe vitae! Consectetur culpa accusamus officiis incidunt! Tempora voluptatem provident nobis sed facilis rerum?"
  }

  return (
    <main>
      <Banner />
      <div className={`max-w-6xl px-4 md:px-0 mx-auto`}>
        <div>
          <HomeTitle title="Café & pastelería" />
          <InfoCard text={infoCardText} />
          <div className={`flex`}>
            <ButtonCard url={`https://alacartaonline.com.ar/restaurant/6001b2e3feb46a6a4347c483`} buttonText="Ver Carta" />
          </div>
        </div>
        <div>
          <HomeTitle title="Cuidado & belleza" />
          <div className={`max-w-4xl flex flex-wrap justify-between mx-auto`}>
            <SectionCard />
          </div>
          <div className={`flex`}>
            <ButtonCard url={`/servicios`} buttonText="Quiero ver todos" />
          </div>
        </div>
      </div>
    </main>
  )
}
