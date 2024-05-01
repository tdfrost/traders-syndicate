import PrimaryButton, { ButtonType } from "@/components/buttons/PrimaryButton"
import Image from "next/image"

const Home = () => {
  return (
    <div className="text-white">
      <main className="w-full my-12">
        <div className="flex flex-col space-y-10">
          <div className="w-full h-min space-y-4">
            <h1 className="text-4xl  md:text-5xl font-semibold uppercase">
              Trade Together
              <br />
              Win Together
            </h1>

            <p className="text-lg font-medium w-4/5">
              Learn to follow the rules that keep you in the Trade, and the art
              that helps you win.
            </p>

            <p className="hidden md:block">
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac habitasse platea dictumst quisque sagittis
              purus.
            </p>
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

          <PrimaryButton
            buttonColor={ButtonType.primary}
            text="Join Our Discord"
            textCapitalized
          />
        </div>

        <div></div>
      </main>
    </div>
  )
}

export default Home
