"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Stake = () => {
  const [progress, setProgress] = React.useState(13);
  //   const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);

    // fetch('dsada').then(res => setProgress(res));
    //   fetch("dsada").then((res) => setProgress(res));
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" md:px-5 flex flex-col md:gap-4">
      <div className="bg-[#101217] grid md:rounded-2xl px-8 py-4 ">
        <div className="flex flex-col text-2xl leading-7 md:gap-2 mb-3 ">
          Strategy Description
        </div>
        <div className=" text-sm md:text-lg font-light md:font-medium leading-[1.375rem] text-s-gray">
          Lorem ipsum dolor sit amet consectetur. Nibh phasellus gravida lectus
          et sit suscipit. Quam nisl dis in orci ac adipiscing viverra amet.{" "}
        </div>
      </div>
      <div className="bg-[#101217]   grid-cols-2 grid md:grid-cols-4  md:rounded-2xl px-4 py-5 gap-3 ">
        <div className="bg-gradient-to-r from-[#337ec2] via-[#1d4a55] to-[#477655] p-[0.025rem] rounded-2xl ">
          <div className="bg-black rounded-2xl   md:py-4 md:px-14 text-xl pl-3 ">
            <div className="flex items-center">
              <div className=" hidden md:block text-s-gray  font-light text-[0.7rem] md:text-lg  px-1  ">
                ANNUAL PERCENT RATE
              </div>
              <div className=" block md:hidden text-s-gray  font-light text-[0.7rem] md:text-lg  px-1  ">
                ANNUAL % RATE
              </div>
              <div
                className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
                style={{
                  backgroundImage: `url('images/information.png')`,
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="text-s-aqua text-[0.7rem] px-2  md:text-lg ">
              85%
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#337ec2] via-[#1d4a55] to-[#477655] p-[0.025rem] rounded-2xl ">
          <div className="bg-black rounded-2xl  md:py-4 md:px-14 text-xl pl-3 ">
            <div className="flex items-center">
              <div className="  text-s-gray   font-light text-[0.7rem] md:text-lg px-1">
                TOTAL VALUE LOCKED
              </div>
              <div
                className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
                style={{
                  backgroundImage: `url('images/information.png')`,
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className=" text-[0.7rem] px-2  md:text-lg ">$7,923,693</div>
          </div>
        </div>
        <div className="bg-black rounded-2xl  md:py-4 md:px-14 text-xl pl-3 ">
          <div className="flex  items-center">
            <div className="  text-s-gray  font-light text-[0.7rem] md:text-lg  px-1">
              wstETH
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
              style={{
                backgroundImage: `url('images/information.png')`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className=" text-[0.7rem] px-2  md:text-lg ">$35,0000</div>
        </div>
        <div className="bg-black rounded-2xl  md:py-4 md:px-14 text-xl pl-3 ">
          <div className="flex  items-center">
            <div className="  text-s-gray  font-light text-[0.7rem] md:text-lg  px-1">
              TOTAL DEBT
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
              style={{
                backgroundImage: `url('images/information.png')`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className=" text-[0.7rem] px-2  md:text-lg ">$748,415,330</div>
        </div>
      </div>
      <div className="bg-[#101217]  grid-cols-3 grid md:grid-cols-4  lg:grid-cols-4  justify-between md:rounded-2xl px-2 md:px-4 py-5 gap-2 md:gap-3 ">
        <div className="bg-black rounded-2xl  md:py-4 md:px-14 text-xl pl-3 ">
          <div className="flex  items-center">
            <div className="  text-s-gray  font-light text-[0.7rem] md:text-lg  px-1">
              STATUS
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
              style={{
                backgroundImage: `url('images/information.png')`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className=" text-s-aqua text-[0.7rem] px-2  md:text-lg ">
            Healthy
          </div>
        </div>
        <div className="bg-black rounded-2xl  md:py-4 md:px-14 text-xl pl-3 ">
          <div className="flex  items-center">
            <div className="  text-s-gray font-light  text-[0.7rem] md:text-lg  px-1">
              HEALTH
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
              style={{
                backgroundImage: `url('images/information.png')`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="text-s-aqua text-[0.7rem] px-2  md:text-lg ">
            0.00%
          </div>
        </div>
        <div className="hidden md:block bg-black  rounded-2xl  py-4 px-14 text-xl ">
          <div className="flex items-center">
            <div className="  text-s-gray font-light hidden md:block">
              LIQUDATION RANGE
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
              style={{
                backgroundImage: `url('images/information.png')`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="text-sm hidden md:block">0.00 - 0.00</div>
        </div>
        <div className="bg-black rounded-2xl  md:py-4 md:px-14 text-xl pl-3 ">
          <div className="flex  items-center">
            <div className="  text-s-gray  font-light text-[0.7rem] md:text-lg  px-1">
              BORROW RATE
            </div>
            <div
              className="bg-cover bg-no-repeat bg-center w-3 h-3 md:w-4 md:h-4 block md:ml-2"
              style={{
                backgroundImage: `url('images/information.png')`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="text-[0.7rem] px-2  md:text-lg">0.00%</div>
        </div>
      </div>
      <div className=" grid grid-cols-5 rounded-2xl gap-4 ">
        <div className="hidden md:block  bg-[#101217] md:col-span-3  rounded-2xl  px-8 py-6">
          <div className="text-2xl mb-8">
            Increase your wstETH holdings by staking in high yield farms.
          </div>
          <div className="text-s-gray mb-8 ">
            Lorem ipsum dolor sit amet consectetur. Nibh phasellus gravida
            lectus et sit suscipit. Quam nisl dis in orci ac adipiscing viverra
            amet. Mi curabitur ornare rutrum bibendum commodo phasellus. Ut id
            vel arcu at ut molestie. Erat fringilla enim at et non ut arcu
            sagittis. Tortor arcu at elit ac scelerisque pulvinar.
          </div>
          <div className="text-s-gray ">
            Tempor blandit bibendum et libero imperdiet tincidunt nunc curabitur
            odio. Pulvinar lacus ac convallis lacus eget. Facilisis sed semper
            dui vel mauris hendrerit sit. Platea aliquet nunc amet tempor ipsum
            malesuada. In dis venenatis eu bibendum eu faucibus aliquet
            imperdiet sodales. Vulputate gravida a pellentesque neque.{" "}
          </div>
        </div>

        {/* tab menu */}
        <Tabs
          defaultValue="staking"
          className="w-full bg-[#101218]  col-span-5 md:col-span-2  md:h-[35vh] md:rounded-2xl  flex-col gap-10 "
        >
          <TabsList className="grid w-full grid-cols-2 bg-[#101218] ">
            <TabsTrigger value="staking" className="text-sm md:text-2xl py-2">
              Staking
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="text-sm md:text-2xl py-2">
              Withdraw
            </TabsTrigger>
          </TabsList>
          <TabsContent value="staking">
            <div className="p-4 md:px-10 md:py-8 flex-col  ">
              <div className="flex gap-4 md:gap-7 md:justify-center my-4 md:my-8 ">
                {/* Gradient Border */}
                <div className="block md:w-full  bg-gradient-to-r from-[#337ec2] via-[#1d4a55] to-[#477655] p-[0.07rem] rounded-xl md:rounded-md ">
                  <div className="bg-black flex border border-[#1A1D23]  md:justify-between p-2 rounded-xl md:rounded-md text-[0.7rem] md:text-lg">
                    <div className="md:pl-3 md:pr-8 text-[#8C9096] text-[0.7rem] pr-4  md:text-lg">
                      WSTETH
                    </div>
                    <span className="text-[#8C9096] hidden md:block">|</span>
                    <div>
                      <input
                        className="bg-[#101218] focus:bg-none focus:outline-0 text-right"
                        placeholder="1.5"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 text-sm items-center md:pr-5 text-[0.7rem]">
                  <span>Available</span>
                  <span>1.5</span>
                </div>
              </div>
              <Button className="w-full md:text-[1.15rem]  rounded-full py-3 md:px-2 md:py-6 bg-gradient-to-br from-[#BAC6EF] via-[#65ABE9] to-[#8BF2E8] text-black">
                Stake
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="withdraw">
            <div className="bg-[#101218] px-10 py-8 flex-col">
              <div className="grid grid-cols-5 md:flex border border-[#1A1D23] md:w-full md:justify-between p-2 rounded-md mb-4">
                <div className="col-span-4 p-1 md:pl-3 md:pr-8  text-[#8C9096] text-[0.7rem] md:text-lg">
                  CLAIMABLE REWARDS
                </div>
                <div>
                  <input
                    className="bg-[#101218] focus:bg-none focus:outline-0 md:text-right pr-2 text-[0.7rem]"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 md:flex border border-[#1A1D23] w-full justify-between p-2 rounded-md mb-8">
                <div className=" col-span-4 p-1 md:pl-3 md:pr-8  text-[#8C9096] text-[0.7rem] md:text-lg">
                  TOTAL DEPOSITS
                </div>

                <div>
                  <input
                    className="bg-[#101218] focus:bg-none focus:outline-0 md:text-right pr-2 text-[0.7rem]"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <Button className="w-full md:text-[1.15rem]  rounded-full py-3 md:px-2 md:py-6 bg-gradient-to-br from-[#BAC6EF] via-[#65ABE9] to-[#8BF2E8] text-black">
                Withdraw
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex-col flex bg-[#101217] md:rounded-2xl px-4 py-5 mb-5 justify-center  ">
        {/* web */}
        <div className="hidden md:block md:pl-5 ">
          <div className=" gap-4 md:gap-8 flex justify-between w-[95%]  ">
            <div className="text-base  md:text-[1.3rem] mb-4">
              Liquidation range{" "}
            </div>

            <div className="flex gap-8 text-sm mb-4 md:mb-0">
              <div className="flex-col md:block mb-4">
                <div className="text-s-gray">
                  CURRENT BALANCE (EST) / DEPOSITED{" "}
                </div>
                <div className="text-left md:text-right">
                  <span>3.51835</span> <span>/</span> <span>3.51835 </span>
                </div>
              </div>

              <div className="block">
                <div className="flex gap-4">
                  <div>
                    <div className="text-s-gray">LOSS AMOUNT</div>
                    <div className="text-left md:text-right">0</div>
                  </div>
                  <div>
                    <div className="text-s-gray">%LOSS</div>
                    <div className="text-left md:text-right">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="block md:hidden">
          <div className=" gap-4 md:gap-8 md:flex flex-col justify-between w-[95%]  ">
            <div className="text-base  md:text-[1.3rem] mb-4">
              Liquidation range{" "}
            </div>
            {/* mobile - stake bottom side*/}
            <div className="flex-col  md:flex gap-8 text-sm mb-4 md:mb-0">
              <div className="flex-col md:block mb-4">
                <div className="text-s-gray">
                  CURRENT BALANCE (EST) / DEPOSITED{" "}
                </div>
                <div className="text-left md:text-right">
                  <span>3.51835</span> <span>/</span> <span>3.51835 </span>
                </div>
              </div>
              {/* mobile - loss amount */}
              <div className="block">
                <div className="flex gap-4">
                  <div>
                    <div className="text-s-gray">LOSS AMOUNT</div>
                    <div className="text-left md:text-right">0</div>
                  </div>
                  <div>
                    <div className="text-s-gray">%LOSS</div>
                    <div className="text-left md:text-right">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* graph */}
        {/* pattern */}

        {/* left: progress %  */}
        <div className=" w-[95%] flex-col mt-5 md:mt-20 relative  ">
          <Progress value={progress} className="w-[100%]" />
          <div className="absolute  w-2 h-4 md:h-8 bg-white  bottom-0 right-[34%]"></div>
          <div className="absolute text-[0.6rem] md:text-base  bottom-[-1.65rem] items-center right-[33%] ">
            Oracle
          </div>
          {/* portion */}
          <div className="absolute w-6 h-2 md:w-24 md:h-8  bottom-[0.1rem] left-[47%] bg-gray-50"></div>
        </div>

        <div className="flex justify-between text-sm w-[95%] ">
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
          <div className="flex-cols">
            <div className="h-[1rem] w-[0.1rem] bg-gray-100 "></div>
          </div>
        </div>
        <div className="flex justify-between text-[0.4rem] md:text-sm w-[98.5%] mt-2  ">
          <div className="flex-cols">
            <div>USD $0</div>
          </div>
          <div className="flex-cols">
            <div>USD $500</div>
          </div>
          <div className="flex-cols">
            <div>USD $900</div>
          </div>
          <div className="flex-cols">
            <div>USD $1350</div>
          </div>
          <div className="flex-cols">
            <div>USD $1750</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
