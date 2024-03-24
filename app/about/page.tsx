import Tools from "@/components/Tools";
import Image from "next/image";
import { CgCPlusPlus } from "react-icons/cg";



const url: string =
  "https://res.cloudinary.com/dfabrufbd/image/upload/v1710947913/resumeImages/boyImage.jpg";

const About = () => {
  return (
    <div>
      {/* mobile view */}
      <main className="sm:hidden text-white">
        <div className="about">
          <div
            className="heading text-center
        text-3xl mt-20 underline text-indigo-500"
          >
            <h1>About Me</h1>
          </div>
          <div className="aboutme">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id totam
              illum quod praesentium eligendi at repellat est magnam libero aut
              deleniti saepe a, veritatis voluptas. Atque necessitatibus
              laboriosam asperiores aut molestiae rerum voluptas possimus
              mollitia obcaecati velit, nostrum dolores minus eveniet iusto
              aliquid eaque neque amet? Aspernatur illum porro soluta.
            </p>
          </div>
          <div className="image mt-10">
            <Image
              src={url}
              priority
              className="rounded m-auto  text-center"
              alt="aniket-image"
              height={320}
              width={320}
            />
          </div>

        </div>

        <div className="skills">
          <div className="heading2 text-center
        text-3xl mt-10 underline text-indigo-500 "
          >
            <h1>Skills</h1>
          </div>
          <div className="myskills mt-20 w-[96vw] mb-20">
            <Tools  />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
