import Link from 'next/link';
import { gotu, cormorantGaramond } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Page() {
  const feedback = {
    names: ['Ana', 'Andrei', 'Cristina', 'Radu'],
    texts: ['Cursul de productivitate mi-a schimbat complet perspectiva asupra modului în care gestionez timpul și sarcinile zilnice. Sunt recunoscătoare pentru metodele practice și personalizate pe care le-am învățat în cadrul sesiunilor 1:1!', 
            'Serviciul de productivitate 1:1 m-a ajutat să îmi prioritizez obiectivele și să-mi maximizez eficiența în munca de zi cu zi. Am observat o creștere semnificativă a rezultatelor mele într-un timp foarte scurt!',
            'Experiența mea cu acest curs de productivitate a fost excepțională. Sesiunile personalizate au fost adaptate perfect nevoilor mele și mi-au furnizat instrumentele necesare pentru a fi mai organizată și mai productivă în fiecare aspect al vieții mele.', 
            'Am fost inițial sceptic în legătură cu beneficiile unui serviciu de productivitate 1:1, dar am fost plăcut surprins de rezultatele pe care le-am obținut. Sfaturile și strategiile oferite au făcut o diferență reală în modul în care îmi gestionez timpul și sarcinile.']
  }

  return (
    <div>
      <nav className={`${gotu.className} z-50 sticky top-0 bg-beige-100/80`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href='#top'>
                <button type="button" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl whitespace-nowrap">ANDREEA ZOSIN</span>
                </button>
                </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 
                md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
                md:border-0 md:bg-transparent ">
                  <li>
                      <a href="#aboutMe">
                      <button className="relative inline-flex items-center justify-center overflow-hidden 
                          text-gray-900 rounded-lg group hover:bg-beige-200 hover:rounded-2xl mt-2.5 mb-2.5 px-2.5">
                          <span className='relative leading-9 transition-all ease-in duration-75 text-lg'>DESPRE MINE</span>
                      </button>
                      </a>
                  </li>
                  <li>
                      <a href="#articles">
                      <button className="relative inline-flex items-center justify-center overflow-hidden 
                      text-gray-900 rounded-lg group hover:bg-beige-200 hover:rounded-2xl mt-2.5 mb-2.5 px-2.5">
                          <span className='relative leading-9 transition-all ease-in duration-75 text-lg'>ARTICOLE</span>
                      </button>
                      </a>
                  </li>
                  <li>
                      <a href="#services">
                      <button className="relative inline-flex items-center justify-center overflow-hidden 
                      text-gray-900 rounded-lg group hover:bg-beige-200 hover:rounded-2xl mt-2.5 mb-2.5 px-2.5">
                          <span className='relative leading-9 transition-all ease-in duration-75 text-lg'>LUCREAZĂ CU MINE</span>
                      </button>
                      </a>
                  </li>
                  <li>
                      <a href="#feedback">
                      <button className="relative inline-flex items-center justify-center overflow-hidden 
                          text-gray-900 rounded-lg group hover:bg-beige-200 hover:rounded-2xl mt-2.5 mb-2.5 px-2.5">
                          <span className='relative leading-9 transition-all ease-in duration-75 text-lg'>FEEDBACK</span>
                      </button>
                      </a>
                  </li>
                </ul> 
            </div>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col">
        <div className="mt-16 mb-52 pl-12 pr-24 flex grow flex-col gap-8 md:flex-row">
          <div className="flex items-center justify-center p-1 md:w-2/5 md:pr-20 md:py-1">
              <Image
                src='/greens.jpg'
                width={350}
                height={350}
                className='rounded-xl'
                alt='Image substitute for site presentation'
              />
          </div>
          <div className="flex flex-col flex-wrap justify-center gap-6 rounded-xl px-14 py-10 md:w-7/12  bg-beige-300">
          <p className={`${gotu.className} text-5xl text-gray-800 md:leading-normal text-5xl tracking-wide`}> Despre site </p>
          <p className={`text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. 
          </p> 
          <p className={`text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          </div>
        </div>

        <div className='mt-4 mb-40 flex flex-col md:flex-row' id='aboutMe'>
          <div className="flex flex-wrap justify-center content-center rounded-xl">
            <div className="flex flex-col ml-24 mr-20 bg-beige-300 rounded-xl px-14 py-10 gap-6 text-right">
              <p className={`${gotu.className} text-5xl text-gray-800 md:leading-normal text-5xl tracking-wide`}> 
              Despre mine
              </p>
              <p className={`text-xl text-gray-800 md:text-2xl md:leading-normal`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <p className='text-xl text-gray-800 md:text-2xl md:leading-normal'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
              <Image
                src='/fruit.jpg'
                width={710}
                height={0}
                alt='Image substitute for self presentation'
              />
          </div>
        </div>

        <div id='articles' className='pt-28'>

            <div className={`${gotu.className} mb-10 flex gap-32 justify-center text-2xl`}>
                <button className='bg-beige-300 rounded-3xl py-1 px-16 border-2 border-beige-300 hover:border-beige-400'>PRODUCTIVITATE</button>
                <div className='bg-beige-300 rounded-2xl h-11 w-2'></div>
                <button className='bg-beige-300 rounded-3xl py-1 px-32 border-2 border-beige-300 hover:border-beige-400'>TECH IT</button>
            </div>

            <div className='mt-4 mb-20 flex flex-col justify-center h-96 gap-20 md:flex-row'>

              <div className="flex flex-col justify-even gap-5 rounded-xl pb-8 w-1/5 bg-beige-300 h-fit">
                  <img className='object-cover m-2 max-h-40 max-w-80 rounded-xl' src='/bg2.jpg' alt='image of article'/>

                  <div className='flex flex-col gap-1 text-center px-6 leading-normal'>
                    <p className='text-2xl'> Lorem ipsum </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                  </div>
              </div>

              <div className="flex flex-col justify-even gap-5 rounded-xl pb-8 w-1/5 bg-beige-300 h-fit">
                  <img className='object-cover m-2 max-h-40 max-w-80 rounded-xl' src='/bg3.jpg' alt='image of article'/>

                  <div className='flex flex-col gap-1 text-center px-6'>
                    <p className='text-2xl'> Lorem ipsum </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                  </div>
              </div>

              <div className="flex flex-col justify-even gap-5 rounded-xl pb-8 w-1/5 bg-beige-300 h-fit">
                  <img className='object-cover m-2 max-h-40 max-w-80 rounded-xl' src='/bg1.jpg' alt='image of article'/>

                  <div className='flex flex-col gap-1 text-center px-6'>
                    <p className='text-2xl'> Lorem ipsum </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                  </div>
              </div>

            </div>  

            <div className='flex justify-center mb-20'>
              <button className='bg-beige-300 rounded-3xl py-1 px-10 border-2 border-beige-300 hover:border-beige-400'>VEZI TOATE ARTICOLELE</button>  
            </div>
        </div>

        <div className='pt-32' id='services'>

            <div className={`${gotu.className} mb-16 flex gap-32 justify-around text-lg`}>
                <p className='text-3xl'>LUCREAZĂ CU MINE</p>
                <div className='flex gap-9'>
                  <button className='bg-beige-300 rounded-3xl py-1 px-10 border-2 border-beige-300 hover:border-beige-400'>PRODUCTIVITATE</button>
                  <button className='bg-beige-300 rounded-3xl py-1 px-20 border-2 border-beige-300 hover:border-beige-400'>TECH IT</button>
                </div>
            </div>

            <div className='mt-4 mb-40 px-5 flex flex-col justify-center items-center h-96 gap-20 md:flex-row'>

              <div className='w-1/2 flex flex-col  md:flex-row gap-20'>
                <div className="flex flex-col justify-even gap-5 rounded-xl pb-8 w-2/5 bg-beige-300 h-fit ">
                    <img className='object-cover m-2 max-h-40 max-w-80 rounded-xl' src='/bg2.jpg' alt='image of article'/>

                    <div className='flex flex-col gap-1 text-center px-6'>
                      <p className='text-2xl'> Lorem ipsum </p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                    </div>
                </div>

                <div className="flex flex-col justify-even gap-5 rounded-xl pb-8 w-2/5 bg-beige-300 h-fit">
                    <img className='object-cover m-2 max-h-40 max-w-80 rounded-xl' src='/bg3.jpg' alt='image of article'/>

                    <div className='flex flex-col gap-1 text-center px-6'>
                      <p className='text-2xl'> Lorem ipsum </p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna 
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                    </div>
                </div>
              </div>

              <form className={`${gotu.className} bg-beige-300 h-3/4 rounded-xl `}>

                <div className="mt-8 mb-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3 px-4">
                    <label htmlFor="full-name" className="block leading-6 text-gray-900">Numele complet</label>
                    <div className="mt-2">
                      <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full rounded-md 
                      bg-beige-200
                      border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                      focus:ring-2 focus:ring-inset focus:ring-beige-400 sm:text-sm sm:leading-6"/>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4 px-4">
                  <label htmlFor='email' className="block leading-6 text-gray-900">Email</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete='email' 
                    className="block w-full bg-beige-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-400 sm:text-sm sm:leading-6"/>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6 pr-4">
                  <button type="submit" className="rounded-md px-3 py-2 font-semibold 
                  border-2 border-beige-400 
                  hover:bg-beige-400 focus-visible:outline focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-beige-400">Trimite</button>
                </div>
              </form>

            </div>  

        </div>

        <div className='flex flex-col pt-28 gap-6'  id='feedback'>
          <div className={`${gotu.className} flex justify-center text-3xl`}>
            TESTIMONIALE
          </div>

          <div className='flex gap-12 md:flex-row pb-12 px-10'>
            {feedback.names.map((value, index) => (
            <div className='h-5/6 bg-beige-300 rounded-xl p-4 text-lg' key={index}>
              <p>{feedback.texts[index]}</p>
              <p className='font-bold'>- {value}</p>
            </div>
            ))}
          </div>

        </div>

        <div className='mt-8 mb-14 flex grow flex-col gap-4' id='instagram'>
          <div className='flex justify-center mb-14'>
              <Link href={'https://www.instagram.com/andreea.zosin/'} 
                target="_blank"
                className='bg-beige-300 rounded-3xl py-1 px-10 border-2 border-beige-300 hover:border-beige-400 text-2xl'>
                Urmărește-mă pe Instagram
              </Link>  
          </div>

          <div className='flex flex-row gap-1 px-5'>
            <Link href={'https://www.instagram.com/p/C5BzFHwIZr4/'} target='_blank'
                  className='hover:opacity-70 transition-opacity'>
              <Image                 
                src='/insta1.png'
                width={350}
                height={350}
                className='hover:bg-white'
                alt='Image substitute for site presentation'>

                </Image>
            </Link>

            <Link href={'https://www.instagram.com/p/C3NLNcisfLZ/'} target='_blank'
                  className='hover:opacity-70 transition-opacity'>
              <Image                 
                src='/insta2.png'
                width={350}
                height={350}
                className='hover:bg-white'
                alt='Image substitute for site presentation'>

                </Image>
            </Link>

            <Link href={'https://www.instagram.com/p/C3F78LboAF_/'} target='_blank'
                  className='hover:opacity-70 transition-opacity'>
              <Image                 
                src='/insta3.png'
                width={350}
                height={350}
                className='hover:bg-white'
                alt='Image substitute for site presentation'>

                </Image>
            </Link>

            <Link href={'https://www.instagram.com/p/C3DK8xaMxJV/'} target='_blank'
                  className='hover:opacity-70 transition-opacity'>
              <Image                 
                src='/insta4.png'
                width={350}
                height={350}
                className='hover:bg-white'
                alt='Image substitute for site presentation'>

                </Image>
            </Link>

            <Link href={'https://www.instagram.com/p/C4DHpuQI-kj/'} target='_blank'
                  className='hover:opacity-70 transition-opacity'>
              <Image                 
                src='/insta5.png'
                width={350}
                height={350}
                className='hover:bg-white'
                alt='Image substitute for site presentation'>

                </Image>
            </Link>
          </div>
          
        </div>
      </main>
    </div>

  );
}
