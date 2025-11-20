import Scrollable from "@/components/scrollable";
import H1 from "@/components/better-elements/heading-one";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:text-center gap-3 h-full justify-center items-center w-full px-10 md:px-5 sm:px-2">
      <div className="flex flex-col items-center w-full ">
        <div className="my-5 mb-8">
          <h1 className="text-5xl mb-5 text-center">Vojtěch Razima</h1>
        </div>
        <H1 className="text-center">About me</H1>
        <p className="p-8 pt-3 text-xl max-w-2xl">
          I would not consider myself as an interesting person, but if i'd have to introduce myself as a rookie front-end developer and advanced photographer. I haven't got much experience in coding yet, but I am eager to learn and improve my skills. As a photographer, I have a good eye for detail and composition, which I believe can be beneficial in web design. In my free time, I enjoy exploring new places and capturing moments through my camera lens.
        </p>
      </div>
      <Scrollable />
    </div>
  );
}
