import PrimaryButton, { ButtonType } from "@/components/buttons/PrimaryButton"
import Image from "next/image"

const Home = () => {
  return (
    <div className="text-white">
      <main className="w-full my-16 space-y-20 md:space-y-32">
        <div className="flex flex-col lg:flex-row space-y-10 md:items-center">
          <div className="flex flex-col w-full h-min space-y-4">
            <h1 className="text-4xl md:text-6xl font-semibold uppercase md:leading-[1.15]">
              Trade Together
              <br />
              Win Together
            </h1>

            <p className="text-lg font-base w-11/12 md:w-3/4 ">
              Learn to follow the rules that keep you in the Trade, and the art
              that helps you win.
            </p>

            <p className="hidden md:block w-3/5">
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac habitasse platea dictumst quisque sagittis
              purus.
            </p>

            <div className="hidden md:block py-2">
              <PrimaryButton
                buttonColor={ButtonType.primary}
                text="Join Our Discord"
                textCapitalized
              />
            </div>
          </div>

          <div className="flex items-center w-full">
            <Image
              src="/hero-bull.webp"
              width={0}
              height={0}
              layout="responsive"
              alt="Image of a red orange halographic bull."
            />
          </div>

          <div className="md:hidden">
            <PrimaryButton
              buttonColor={ButtonType.primary}
              text="Join Our Discord"
              textCapitalized
            />
          </div>
        </div>

        <div className="space-y-14">
          <h2 className="text-4xl md:hidden font-semibold">
            Become A <br />
            <span className="text-red-orange-500">Self Sufficient</span>
            <br />
            Trader
          </h2>

          <h2 className="text-5xl hidden md:block font-semibold text-center">
            Become A
            <span className="text-red-orange-500"> Self Sufficient</span> Trader
          </h2>

          <div className="w-full grid grid-cols-1 md:flex gap-12 md:justify-center md:py-8 md:space-x-8">
            <div className="flex flex-col px-7 min-h-80 md:max-w-sm bg-shark-950 justify-center items-start space-y-4 rounded-md">
              <Image
                src="/icons/meeting-icon.svg"
                width={80}
                height={80}
                alt="icon image of people in a meeting"
              />
              <h3 className="uppercase text-xl font-bold">porttitor auctor</h3>
              <p className="text-lg">
                praesent tristique magna sit amet purus gravida quis blandit
                turpis cursus in hac
              </p>
            </div>

            <div className="flex flex-col px-7 min-h-80 md:max-w-sm bg-shark-950 justify-center items-start space-y-4 rounded-md">
              <Image
                src="/icons/bargraph.svg"
                width={80}
                height={80}
                alt="icon of a bar graph with an arrow facing to the upper right."
              />
              <h3 className="uppercase text-xl font-bold">porttitor auctor</h3>
              <p className="text-lg">
                praesent tristique magna sit amet purus gravida quis blandit
                turpis cursus in hac
              </p>
            </div>

            <div className="flex flex-col px-7 min-h-80 md:max-w-sm bg-shark-950 justify-center items-start space-y-4 rounded-md">
              <Image
                src="/icons/coin.svg"
                width={80}
                height={80}
                alt="icon of a two coins"
              />
              <h3 className="uppercase text-xl font-bold">porttitor auctor</h3>
              <p className="text-lg">
                praesent tristique magna sit amet purus gravida quis blandit
                turpis cursus in hac
              </p>
            </div>
          </div>

          <div className="flex py-2 justify-center">
            <PrimaryButton
              buttonColor={ButtonType.primary}
              text="Learn More"
              textCapitalized
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-20 justify-center">
          <div>
            <Image
              src="/images/iPhone-15.png"
              alt="A phone with with an open image of a discord community"
              width={0}
              height={0}
              layout="responsive"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Welcome To <br />
              The <span className="text-red-orange-500">Syndicate</span>
            </h2>

            <p className="text-xl">
              Scelerisque aenean cras lacinia feugiat phasellus praesent
              placerat suspendisse arcu mollis litora et sociosqu at rhoncus
              neque porttitor auctor vel augue imperdiet viverra hendrerit
              morbi.
            </p>

            <ul className="text-xl list-disc list-inside marker:text-red-orange-500 marker:text-4xl">
              <li className="">
                <span className="-ml-5 relative ">
                  Scelerisque aenean cras lacinia
                </span>
              </li>
              <li>
                <span className="-ml-5 relative ">litora et sociosqu</span>
              </li>
              <li>
                <span className="-ml-5 relative ">porttitor auctor</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
