import PrimaryButton, { ButtonType } from "@/components/buttons/PrimaryButton"
import Image from "next/image"

const Home = () => {
  return (
    <div className="text-white">
      <main className="w-full my-16 space-y-20">
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

        <div className="space-y-12">
          <h2 className="text-4xl md:hidden font-semibold">
            Become A <br />
            <span className="text-red-orange-500">Self Sufficient</span>
            <br />
            Trader
          </h2>

          <h2 className="text-3xl hidden md:block">
            Become a Self Sufficient Trader
          </h2>

          <div className="w-full grid grid-cols-1 gap-14">
            <div className=" flex flex-col px-7 min-h-80 bg-shark-950 justify-center items-start space-y-4 rounded-md">
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

            <div className="flex flex-col px-7 min-h-80 bg-shark-950 justify-center items-start space-y-4 rounded-md">
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

            <div className="flex flex-col px-7 min-h-80 bg-shark-950 justify-center items-start space-y-4 rounded-md">
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
        </div>
      </main>
    </div>
  )
}

export default Home
