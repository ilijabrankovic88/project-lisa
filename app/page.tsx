import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-orange-50">
      <Navbar />
      <header className="bg-amber-800 text-white py-8 shadow-lg pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            ЈАЗАВИЧАРИ – МАЛИ ПАС ВЕЛИКОГ СРЦА
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <section id="uvod" className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
            1️⃣ УВОД
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Јазавичари су мала, али изузетно храбра раса паса пореклом из Немачке. Препознатљиви су по свом дугом телу, кратким ногама и великом самопоуздању. Иако су малог раста, познати су по својој енергији, интелигенцији и снажној привржености власнику.
            </p>
            <p>
              Ова раса је данас веома популарна широм света и често се може видети као кућни љубимац и равноправан члан породице. Јазавичари су познати по својој храбрости и често се понашају као да су много већи него што заиста јесу.
            </p>
            <p>
              Више информација о овој раси можете пронаћи на поузданим изворима као што су{" "}
              <a href="https://sr.wikipedia.org/wiki/%D0%88%D0%B0%D0%B7%D0%B0%D0%B2%D0%B8%D1%87%D0%B0%D1%80" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 underline font-medium">
                Википедија (српски)
              </a>,{" "}
              <a href="https://en.wikipedia.org/wiki/Dachshund" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 underline font-medium">
                Wikipedia (English)
              </a>{" "}
              и{" "}
              <a href="https://www.akc.org/dog-breeds/dachshund/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 underline font-medium">
                American Kennel Club
              </a>.
            </p>
          </div>
        </section>

        <section id="o-jazavicarima" className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
            2️⃣ О ЈАЗАВИЧАРИМА
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Јазавичар (енг. Dachshund) је раса паса која је првобитно настала за лов на јазавце и друге животиње које живе у подземним јазбинама. Њихово дугачко тело и кратке ноге омогућавају им лако кретање кроз уске тунеле.
            </p>
            
            <div className="my-6">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">Постоје три основна типа јазавичара:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Краткодлаки</li>
                <li>Дугодлаки</li>
                <li>Оштродлаки</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Основне карактеристике:</h3>
              <ul className="space-y-2">
                <li><strong>Висина:</strong> 20–27 цм</li>
                <li><strong>Тежина:</strong> 4–9 кг</li>
                <li><strong>Животни век:</strong> 12–16 година</li>
                <li><strong>Карактер:</strong> храбар, интелигентан, помало тврдоглав, али веома лојалан</li>
              </ul>
            </div>

            <p>
              Јазавичари су заштитнички настројени и често развијају снажну емоционалну везу са својим власником.
            </p>
          </div>
        </section>

        <section id="istorija" className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
            3️⃣ ИСТОРИЈА
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Раса јазавичар потиче из Немачке још из 15. века. Њихово име потиче од немачких речи „Dachs" (јазавац) и „Hund" (пас), што у преводу значи „пас за јазавце".
            </p>
            <p>
              Првобитно су коришћени за лов на јазавце, лисице и зечеве. Debido своје храбрости, издржљивости и способности копања, били су веома цењени ловачки пси. Њихово дугачко тело и снажне канџе омогућавале су им да се лако увуку у јазбине и истерају плен напоље.
            </p>
            <p>
              Током 19. века јазавичари постају све популарнији изван Немачке, нарочито у Енглеској и другим деловима Европе. У том периоду почиње плански узгој расе, па се развијају различити типови длаке и величине.
            </p>
            <p>
              Раса је касније призната и од стране међународних кинолошких организација, као што је{" "}
              <a href="https://www.fci.be/" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 underline font-medium">
                Fédération Cynologique Internationale
              </a>, чиме је јазавичар постао једна од најпознатијих и најраспрострањенијих раса паса на свету.
            </p>
            <p>
              Данас се јазавичари углавном држе као кућни љубимци, али и даље у себи носе снажан ловачки инстинкт, велику радозналост и храбар карактер.
            </p>
          </div>
        </section>

        <section id="moj-ljubimac" className="mb-16 bg-linear-to-r from-amber-100 to-orange-100 rounded-lg shadow-md p-8 border-2 border-amber-300">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            4️⃣ МОЈ ЉУБИМАЦ
          </h2>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-lg">
              Мој јазавичар се зове <strong className="text-amber-800 text-xl">Лиса</strong> и има <strong>3 године</strong>. Веома је разиграна и воли да проводи време са породицом. Њена омиљена играчка је гумена кост, а највише на свету воли да спава и одмара на топлом и мирном месту.
            </p>
            <p>
              Посебно је занимљиво то што уме да спава у најразличитијим, смешним положајима и често изгледа као да је у дубоком сну чак и када је око ње бука.
            </p>
            <p className="text-lg font-medium text-amber-900 italic">
              За мене, мој јазавичар није само пас, већ прави члан породице и верни пријатељ.
            </p>
          </div>
        </section>

        <section id="galerija" className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
            5️⃣ ГАЛЕРИЈА
          </h2>
          <p className="text-gray-600 mb-6">
            У овој секцији налазе се слике јазавичара у различитим ситуацијама – током игре, одмора и свакодневног живота.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/lisa1.jpeg"
                alt="Лиса - слика 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/lisa2.jpeg"
                alt="Лиса - слика 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/lisa3.jpeg"
                alt="Лиса - слика 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="video" className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
            6️⃣ ВИДЕО СЕКЦИЈА
          </h2>
          <p className="text-gray-600 mb-6">
            Овде можете погледати кратке видео-снимке о јазавичарима и њиховим особинама на платформи YouTube.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KCwOkeWh_wE"
                title="YouTube видео - Јазавичари"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZIJ1Q_Zz6Rs"
                title="YouTube видео - Јазавичари 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
        <section id="kontakt" className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-2">
            📬 КОНТАКТ
          </h2>
          <p className="text-gray-600 mb-6">
            Уколико имате питања о јазавичарима или желите да нас контактирате, можете то учинити путем следећих информација:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-xl mt-0.5">📧</span>
                <div>
                  <h3 className="font-semibold text-amber-800">Е-пошта</h3>
                  <a href="mailto:info@jazavicari.rs" className="text-gray-700 hover:text-amber-700 transition-colors">ilijabrankovic88@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-xl mt-0.5">📞</span>
                <div>
                  <h3 className="font-semibold text-amber-800">Телефон</h3>
                  <a href="tel:+381601234567" className="text-gray-700 hover:text-amber-700 transition-colors">+381 66 805 1015</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-700 text-xl mt-0.5">📍</span>
                <div>
                  <h3 className="font-semibold text-amber-800">Локација</h3>
                  <p className="text-gray-700">Ниш, Србија</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-amber-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">🐕 Лиса - Највернији пријатељ 🐕</p>
          <p className="text-sm mt-2 text-amber-200">3 године љубави и верности</p>
        </div>
      </footer>
    </div>
  );
}
