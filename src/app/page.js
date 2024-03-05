function Page() {
  return (
    <div className="flex gap-5 justify-between py-6 pr-6 pl-12 bg-slate-900 rounded-[40px] max-md:flex-wrap max-md:px-5">
      <div className="flex flex-col items-center my-auto basis-0 max-md:hidden">
        <img
          loading="lazy"
          src="/1.svg"
          className="self-start ml-5 aspect-square w-[34px] max-md:ml-2.5"
        />
        <img
          loading="lazy"
          src="/2.png" className="mt-24 rounded-3xl aspect-square w-[60px] max-md:mt-10"
        />
        <img
          loading="lazy"
          src="/3.svg"
          className="mt-9 aspect-[0.82] stroke-[2px] stroke-stone-300 w-[18px]"
        />
        <img
          loading="lazy"
          src="/4.svg"
          className="mt-14 aspect-square stroke-[2px] stroke-stone-300 w-[22px] max-md:mt-10"
        />
        <img
          loading="lazy"
          src="/5.svg"
          className="mt-14 w-5 aspect-square stroke-[2px] stroke-stone-300 max-md:mt-10"
        />
        <img
          loading="lazy"
          src="6.svg"
          className="mt-14 w-5 aspect-[0.91] stroke-[2px] stroke-stone-300 max-md:mt-10"
        />
        <div className="flex justify-center items-center self-stretch pr-4 mt-80 bg-blue-200 rounded-full aspect-[1.36] max-md:mt-10">
          <img
            loading="lazy"
            src="/7.png"
            className="w-11 aspect-square"
          />
        </div>
        <img
          loading="lazy"
          src="/8.svg"
          className="mt-14 aspect-[1.1] stroke-[2px] stroke-stone-300 w-[22px] max-md:mt-10"
        />
      </div>
      <div className="px-12 pt-12 pb-6 bg-slate-800 rounded-[40px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2.5 justify-between capitalize max-md:flex-wrap max-md:max-w-full">
                <div className="text-3xl font-extrabold text-white">
                  <span className="">hello,</span>
                  <br />
                  Dr. Colter!{" "}
                </div>
                <img
                  loading="lazy"
                  src="/9.svg"
                  className="self-end mt-12 aspect-square fill-amber-200 w-[22px] max-md:mt-10"
                />
                <div className="flex gap-3.5 self-start px-6 py-5 text-base font-medium whitespace-nowrap rounded-3xl bg-slate-700 text-stone-300 max-md:px-5">
                  <img
                    loading="lazy"
                    src="/10.svg"
                    className="w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto">Search</div>
                </div>
                <img
                  loading="lazy"
                  src="/11.png"
                  className="self-start rounded-3xl aspect-square w-[60px]"
                />
              </div>
              <div className="mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-7">
                      <div className="flex gap-5 justify-between pl-6 font-bold text-white capitalize bg-blue-950 rounded-[30px] max-md:pl-5">
                        <div className="flex flex-col flex-1 my-auto">
                          <div className="text-3xl">42</div>
                          <div className="mt-6 text-base whitespace-nowrap">
                            patients visited
                          </div>
                          <div className="mt-2.5 text-xs font-medium text-zinc-300">
                            this month
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 px-8 py-9 text-sm whitespace-nowrap rounded-none bg-slate-700 max-md:px-5">
                          <div className="shrink-0 bg-blue-500 bg-opacity-50 h-[25px] rounded-[30px_30px_0px_0px]" />
                          <div className="flex flex-col px-2.5 pt-2 pb-5 bg-blue-500 rounded-none">
                            <img
                              loading="lazy"
                              src="/12.svg"
                              className="self-center w-7 aspect-[2.78] stroke-[2px] stroke-white"
                            />
                            <div className="mt-2">70%</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-6 py-4 mt-6 w-full bg-blue-950 rounded-[30px] max-md:px-5">
                        <div className="flex gap-3 justify-between text-base font-bold text-stone-300">
                          <img
                            loading="lazy"
                            src="/13.png"
                            className="rounded-2xl aspect-[1.37] w-[30px]"
                          />
                          <div className="flex-auto">Upcoming Events</div>
                        </div>
                        <div className="flex gap-5 justify-between mt-4">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center rounded-full aspect-square bg-zinc-300 h-[79px] w-[79px]">
                            <img
                              loading="lazy"
                              src="/14.png"
                              className="object-cover absolute inset-0 size-full"
                            />
                            <img
                              loading="lazy"
                              src="/15.svg"
                              className="w-full bg-cyan-200 rounded-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col flex-1 self-start text-xs capitalize whitespace-nowrap text-zinc-300">
                            <div className="text-xl font-bold text-white">
                              aliza shah
                            </div>
                            <div className="flex gap-2 justify-between mt-2 font-medium">
                              <img
                                loading="lazy"
                                src="/16.svg"
                                className="w-4 aspect-[1.14] fill-white stroke-[1.338px] stroke-neutral-400"
                              />
                              <div className="grow">08:00-09:00 am</div>
                            </div>
                            <div className="justify-center px-3 py-2 mt-4 font-semibold lowercase rounded-xl bg-slate-700">
                              <span className="font-medium text-zinc-300">
                                Visited 7{" "}
                              </span>
                              <span className="font-medium lowercase text-zinc-300">
                                days ago
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-8 pt-8 pb-12 mx-auto w-full bg-blue-950 rounded-[40px] max-md:px-5 max-md:mt-7">
                      <div className="flex gap-5 justify-between w-full whitespace-nowrap">
                        <div className="flex-auto self-start text-2xl font-bold text-white">
                          Statistics
                        </div>
                        <div className="flex gap-2 justify-between px-3.5 py-3 text-xs font-semibold capitalize rounded-2xl border border-blue-500 border-solid text-zinc-300">
                          <div>Weekly</div>
                          <img
                            loading="lazy"
                            src="/17.svg"
                            className="my-auto aspect-[1.79] stroke-[1px] stroke-stone-300 w-[9px]"
                          />
                        </div>
                      </div>
                      <div className="text-xs font-medium capitalize text-zinc-300">
                        November 2023
                      </div>
                      <img
                        loading="lazy"
                        src="/18.png"
                        className="mt-10 w-full aspect-[2.13] stroke-[2px] stroke-white max-md:mr-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-9 text-2xl font-bold text-white max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto">Active Patients</div>
                <div className="flex-auto">Upcoming Events</div>
              </div>
              <div className="mt-7 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-8 pt-4 pb-9 mx-auto w-full bg-blue-950 rounded-[40px] max-md:px-5 max-md:mt-6">
                      <div className="flex gap-5 justify-between">
                        <div className="my-auto text-xs font-semibold capitalize text-stone-300">
                          08:00 am
                        </div>
                        <div className="flex gap-5 justify-between py-2 pr-12 pl-3 bg-red-100 rounded-3xl max-md:pr-5">
                          <div className="flex justify-center items-center w-9 h-9 bg-fuchsia-300 rounded-full aspect-square stroke-[1px]">
                            <img
                              loading="lazy"
                              src="/19.png"
                              className="w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col flex-1 my-auto text-black capitalize whitespace-nowrap">
                            <div className="text-base font-bold">
                              mark jaxon
                            </div>
                            <div className="flex gap-1.5 justify-between mt-2 text-xs font-medium">
                              <img
                                loading="lazy"
                                src="/20.svg"
                                className="w-2.5 aspect-square stroke-[1px] stroke-black"
                              />
                              <div className="grow">08:00-09:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between px-px mt-7 w-full">
                        <div className="my-auto text-xs font-semibold capitalize text-stone-300">
                          09:00 am
                        </div>
                        <div className="flex gap-4 justify-between py-2 pr-10 pl-3 bg-green-100 rounded-3xl max-md:pr-5">
                          <div className="flex justify-center items-center w-9 h-9 bg-teal-100 rounded-full aspect-square stroke-[1px]">
                            <img
                              loading="lazy"
                              src="/21.png"
                              className="w-full aspect-square"
                            />
                          </div>
                          <div className="flex flex-col flex-1 my-auto text-black capitalize whitespace-nowrap">
                            <div className="text-base font-bold">
                              maira khan
                            </div>
                            <div className="flex gap-1.5 justify-between mt-2 text-xs font-medium">
                              <img
                                loading="lazy"
                                src="/20.svg"
                                className="w-2.5 aspect-[1.11] stroke-[1px] stroke-black"
                              />
                              <div className="grow">09:00-10:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between mt-7 capitalize">
                        <div className="grow my-auto text-xs font-semibold whitespace-nowrap text-stone-300">
                          10:00 am
                        </div>
                        <div className="flex gap-4 justify-between py-2 pr-16 pl-3.5 text-black bg-teal-100 rounded-3xl max-md:pr-5">
                          <img
                            loading="lazy"
                            src="/22.png"
                            className="w-9 bg-green-200 rounded-full aspect-[0.97] stroke-[1px]"
                          />
                          <div className="flex flex-col flex-1 my-auto">
                            <div className="text-base font-bold">brick zon</div>
                            <div className="flex gap-1 justify-between mt-1.5 text-xs">
                              <img
                                loading="lazy"
                                src="/20.svg"
                                className="w-2.5 aspect-[1.11] stroke-[1px] stroke-slate-900"
                              />
                              <div>10:00-11:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between pr-20 mt-6 text-xs font-semibold capitalize text-stone-300 max-md:pr-5">
                        <div className="self-start mt-3.5">11:00 am</div>
                        <div className="justify-center px-5 py-2.5 whitespace-nowrap bg-slate-900 rounded-[30px] max-md:px-5">
                          Break Time
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between pr-4 mt-6 w-full capitalize">
                        <div className="my-auto text-xs font-semibold text-stone-300">
                          12:00 am
                        </div>
                        <div className="flex gap-4 justify-between py-2 pr-11 pl-2.5 text-black whitespace-nowrap bg-sky-200 rounded-3xl max-md:pr-5">
                          <img
                            loading="lazy"
                            src="/23.png"
                            className="bg-lime-100 rounded-full aspect-square stroke-[1px] w-[37px]"
                          />
                          <div className="flex flex-col flex-1 my-auto">
                            <div className="text-base font-bold">Alexa Max</div>
                            <div className="flex gap-2 justify-between mt-2 text-xs font-medium">
                              <img
                                loading="lazy"
                                src="/20.svg"
                                className="w-2.5 aspect-[1.11] stroke-[1px] stroke-black"
                              />
                              <div className="grow">12:00-13:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div className="flex gap-5 justify-between px-7 py-7 bg-blue-950 rounded-[40px] max-md:px-5">
                        <div className="flex flex-col flex-1 self-start mt-1.5 capitalize whitespace-nowrap">
                          <div className="text-xl font-bold text-white">
                            Team Meeting
                          </div>
                          <div className="flex gap-2 justify-between mt-2 text-xs font-medium text-zinc-300">
                            <img
                              loading="lazy"
                              src="/24.svg"
                              className="aspect-[1.14] stroke-[1px] stroke-stone-300 w-[17px]"
                            />
                            <div className="flex-auto my-auto">05:00-06:00</div>
                          </div>
                          <img
                            loading="lazy"
                            src="/25.png"
                            className="mt-10 max-w-full bg-fuchsia-300 rounded-full aspect-[3.03] stroke-[1px] w-[111px]"
                          />
                        </div>
                        <div className="flex flex-col items-center basis-0">
                          <img
                            loading="lazy"
                            src="/26.png"
                            className="rounded-3xl aspect-square w-[60px]"
                          />
                          <img
                            loading="lazy"
                            src="/27.png"
                            className="mt-7 rounded-2xl aspect-[1.49] w-[60px]"
                          />
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between px-8 py-8 mt-6 bg-blue-950 rounded-[40px] max-md:px-5">
                        <div className="flex flex-col flex-1 font-bold text-white capitalize whitespace-nowrap">
                          <div className="text-sm font-medium text-stone-300">
                            Consultation
                          </div>
                          <div className="mt-5 text-2xl">82/100</div>
                          <div className="flex gap-4 justify-between px-4 py-3 mt-9 text-base rounded-xl bg-slate-700">
                            <div>82%</div>
                            <img
                              loading="lazy"
                              src="/28.svg"
                              className="aspect-[1.82] stroke-[2px] stroke-white w-[22px]"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center items-center self-end mt-9 w-20 h-20 rounded-full bg-zinc-100">
                          <img
                            loading="lazy"
                            src="/29.svg"
                            className="w-full bg-blue-500 rounded-full aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-7 pt-12 pb-8 mx-auto w-full bg-slate-900 rounded-[40px] max-md:px-5 max-md:mt-10">
              <div className="flex justify-center items-center mt-1 rounded-full bg-slate-800 h-[150px] w-[150px]">
                <img
                  loading="lazy"
                  src="/32.png"
                  className="w-full bg-blue-500 rounded-full aspect-square"
                />
              </div>
              <div className="mt-5 text-2xl text-white lowercase whitespace-nowrap">
                <span className="font-bold text-white uppercase">A</span>
                <span className="font-bold text-white">LIAM </span>
                <span className="font-bold text-white uppercase">C</span>
                <span className="font-bold text-white">OLTER</span>
              </div>
              <div className="mt-4 text-base font-medium capitalize text-stone-300">
                Physician
              </div>
              <div className="flex gap-5 justify-between self-stretch px-7 py-6 mt-7 text-lg font-semibold text-white bg-blue-950 rounded-[30px] max-md:px-5">
                <div className="flex-auto my-auto">Active Patients</div>
                <img
                  loading="lazy"
                  src="/30.png"
                  className="max-w-full aspect-[3.13] w-[114px]"
                />
              </div>
              <div className="flex flex-col self-stretch pt-5 pb-2.5 mt-6 w-full bg-blue-950 rounded-[40px]">
                <div className="flex flex-col px-6 max-md:px-5">
                  <div className="flex gap-5 justify-between px-px w-full">
                    <div className="flex gap-4 justify-between">
                      <div className="flex justify-center items-center bg-lime-100 rounded-full aspect-square h-[46px] w-[46px]">
                        <img
                          loading="lazy"
                          src="/31.png"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex flex-col flex-1 self-start mt-2 capitalize whitespace-nowrap">
                        <div className="text-base font-bold text-white">
                          Alexa Max
                        </div>
                        <div className="mt-3 text-xs font-medium text-stone-300">
                          Active 5 min ago
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="/33.png"
                      className="my-auto w-10 rounded-full aspect-square bg-slate-700"
                    />
                  </div>
                  <div className="shrink-0 mt-3.5 h-px bg-white bg-opacity-20" />
                  <div className="justify-center self-center py-3 pr-12 pl-3.5 mt-3.5 text-xs font-semibold text-black capitalize whitespace-nowrap rounded-2xl bg-zinc-100 max-md:pr-5">
                    Hi, Doctor.
                  </div>
                  <div className="flex gap-4 justify-between mt-3.5">
                    <div className="flex justify-center items-center my-auto bg-lime-100 rounded-full aspect-square h-[46px] w-[46px]">
                      <img
                        loading="lazy"
                        src="/31.png"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="grow justify-center px-5 py-4 text-xs font-semibold leading-5 text-black capitalize rounded-2xl bg-zinc-100 max-md:px-5">
                      <span className="">I </span>
                      <span className="">got knee jerk. What</span>
                      <br />
                      <span className="">should i do right now?</span>
                    </div>
                  </div>
                  <div className="self-start mt-3 ml-16 text-xs font-semibold capitalize whitespace-nowrap text-stone-300 max-md:ml-2.5">
                    tue 02:32pm
                  </div>
                  <div className="flex gap-4 self-end px-px mt-2.5">
                    <div className="grow justify-center py-3 pr-9 pl-4 my-auto text-xs font-semibold text-black capitalize whitespace-nowrap bg-blue-200 rounded-2xl max-md:pr-5">
                      Hi, Alexa.
                    </div>
                    <div className="flex justify-center items-center bg-blue-200 rounded-full aspect-square h-[46px] w-[46px]">
                      <img
                        loading="lazy"
                        src="/34.png"
                        className="w-full aspect-square"
                      />
                    </div>
                  </div>
                  <div className="justify-center self-center px-5 py-4 mt-2 max-w-full text-xs font-semibold leading-5 text-black uppercase bg-blue-200 rounded-2xl w-[191px]">
                    <span className="font-medium">T</span>
                    <span className="font-medium lowercase">
                      his help maintain balance and posture.
                    </span>
                    <span className="font-medium uppercase"> d</span>
                    <span className="font-medium lowercase">ont worry.</span>
                  </div>
                  <div className="self-end mt-3 mr-16 text-xs font-semibold capitalize whitespace-nowrap text-stone-300 max-md:mr-2.5">
                    tue 02:32pm
                  </div>
                </div>
                <div className="flex gap-5 justify-between py-1.5 pr-2 pl-7 mx-2.5 mt-4 max-w-full text-xs font-semibold text-white lowercase bg-slate-700 rounded-[29px] w-[331px] max-md:pl-5">
                  <div className="flex gap-5 justify-between my-auto">
                    <img
                      loading="lazy"
                      src="/35.svg"
                      className="w-4 aspect-[0.72] stroke-[2px] stroke-stone-300"
                    />
                    <div className="flex-auto">
                      T<span className="lowercase">ype your text......</span>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="/36.png"
                    className="rounded-3xl aspect-square w-[60px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
