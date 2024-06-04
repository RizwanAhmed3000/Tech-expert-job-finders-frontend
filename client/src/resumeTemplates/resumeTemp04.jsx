import React from "react";

const resumeTemp04 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg my-8">
      <div className="grid grid-cols-3">
        <div className="bg-black text-white p-8">
          <h2 className="text-4xl font-light ">SMITH</h2>
          <h1 className="text-5xl font-bold mb-2">WILLIAM</h1>
          <h3 className="mb-4 text-xl">VISUAL ARTIST</h3>
          <div className="mb-4">
            <h4 className="font-bold mb-2 text-md tracking-widest">CONTACT</h4>
            <p className="text-sm mb-1">+41 458 2356</p>
            <p className="text-sm mb-1">smithwill@gmail.com</p>
            <p className="text-sm mb-1">01 Street, New York, USA</p>
            <p className="text-sm mb-1">www.smithwilliam.com</p>
          </div>
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-xl tracking-widest">SOCIAL</h4>
            <p className="text-sm mb-1">Facebook: facebook/smithwill</p>
            <p className="text-sm mb-1">Twitter: twitter/smithwill</p>
            <p className="text-sm mb-1">LinkedIn: linkedin/smithwill</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-xl tracking-widest">SKILLS</h4>
            <p className="mb-2">Graphic Design</p>
            <div className="w-full bg-gray-700 h-1 mb-4">
              <div className="bg-white h-1 w-4/5"></div>
            </div>
            <p className="mb-2">Web Design</p>
            <div className="w-full bg-gray-700 h-1 mb-4">
              <div className="bg-white h-1 w-3/4"></div>
            </div>
            <p className="mb-2">Visual Art</p>
            <div className="w-full bg-gray-700 h-1 mb-4">
              <div className="bg-white h-1 w-2/3"></div>
            </div>
            <p className="mb-2">User Interface Design</p>
            <div className="w-full bg-gray-700 h-1 mb-4">
              <div className="bg-white h-1 w-4/5"></div>
            </div>
            <p className="mb-2">User Experience Design</p>
            <div className="w-full bg-gray-700 h-1 mb-4">
              <div className="bg-white h-1 w-3/4"></div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="font-bold mb-3 text-xl tracking-widest">
              CERTIFICATE
            </h4>
            <p className="mb-3 text-sm">
              Graphic Design <br /> (2023-2024)
            </p>
            <p className="mb-3 text-sm">
              Web Design <br /> (2023-2024)
            </p>
            <p className="mb-3 text-sm">
              Visual Art <br /> (2023-2024)
            </p>
            <p className="mb-3 text-sm">
              User Interface Design <br /> (2023-2024)
            </p>
            <p className="mb-3 text-sm">
              User Experience Design <br /> (2023-2024)
            </p>
          </div>
        </div>
        <div className="col-span-2 ">
          {/* About */}
          <div className="mb-8 p-12 bg-gray-200">
            <h4 className="font-bold text-2xl mb-2 tracking-widest">ABOUT</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, saepe. Ad eligendi nihil blanditiis, accusantium
              magni velit nostrum libero voluptatem praesentium
            </p>
          </div>
          {/* Education */}
          <div className="mb-8 p-8">
            <h4 className="font-bold text-2xl mb-4 tracking-widest ">
              EDUCATION
            </h4>
            <div className="mb-4">
              <h5 className="font-bold">
                MASTER'S OF ARTS, MAJOR IN COMMUNICATION
              </h5>
              <h6>UNIVERSITY NAME | CITY NAME</h6>
              <span>2020</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem...
              </p>
            </div>
            <div className="mb-4 ">
              <h5 className="font-bold">
                BACHELOR OF ARTS, MAJOR IN COMMUNICATION
              </h5>
              <h6>UNIVERSITY NAME | CITY NAME</h6>
              <span>2020</span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem...
              </p>
            </div>
            <div>
              <div className="font-bold">
                SCHOOL OF ARTS, MAJOR IN COMMUNICATION
              </div>
              <div>UNIVERSITY NAME | CITY NAME</div>
              <div>2020</div>
              <div>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem...
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8 p-8">
            <h4 className="font-bold text-2xl mb-4 ">EXPERIENCE</h4>
            <div className="mb-4">
              <h5 className="font-bold">COMMUNICATIONS INTERN</h5>
              <h6>COMPANY NAME | CITY NAME</h6>
              <span>NOV 2019 - NOV 2020</span>
              <p>Sed ut perspiciatis unde omnis iste natus error sit tem...</p>
            </div>
            <div className="mb-4">
              <h5 className="font-bold">COMMUNICATIONS INTERN</h5>
              <h6>COMPANY NAME | CITY NAME</h6>
              <span>NOV 2019 - NOV 2020</span>
              <p>Sed ut perspiciatis unde omnis iste natus error sit tem...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resumeTemp04;
