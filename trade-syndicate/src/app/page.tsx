import PrimaryButton, { ButtonType } from "@/components/buttons/PrimaryButton"
import Image from "next/image"

const Home = () => {
  return (
    <div className="text-white">
      <main className="w-full my-12">
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

        <div></div>
      </main>
    </div>
  )
}

export default Home
