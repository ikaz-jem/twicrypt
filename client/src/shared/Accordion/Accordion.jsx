import { Disclosure } from "@headlessui/react";
import { FC } from "react";

import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiUpArrow } from 'react-icons/bi'
export const Data = [
  {
    name: "Description",
    content:
      "First ever platform to integrate AI into Bitcoin Ordinals Wrapped with ETH 🧬 Generate Bitcoin Ordinals with AI on our DAPP ✅ Mint Ordinals ✅ AI TG Bot ✅ KYC AUDIT SAFU ✅ Low 4% Buy and Sell for Marketing & Burn ✅ LP Tokens Locked ✅ No Team Tokens ✅ Contract Renounced After Launch 🔥Aggressive Marketing🔥CMC & CG Fast-Track 🚀 The First ever truly AI generated Digital Artifacts on the Bitcoin Network 🚀",
  },
  {
    name: "Traits",
    content: `<ul class="list-disc list-inside leading-7 flex justify-start items-start">
      <li>Made from a sheer Belgian power micromesh.</li>
      <li>
      74% Polyamide (Nylon) 26% Elastane (Spandex)
      </li>
      <li>
      Adjustable hook & eye closure and straps
      </li>
      <li>
      Hand wash in cold water, dry flat
      </li>
    </ul>`,
  },

  {
    name: "Details",
    content:
      "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
  },
  {
    name: "About ",
    content: `
      <ul class="list-disc list-inside leading-7 flex">
      <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.</li>
      <li>
      Please note, packs must be returned in full. We do not accept partial returns of packs.
      </li>
      <li>
      Want to know our full returns policies? Here you go.
      </li>
      <li>
      Want more info about shipping, materials or care instructions? Here!
      </li>
    </ul>
      `,
  },
];



const Accordion = ({
  panelClassName = "p-4 pt-3 last:pb-0  text-sm text-slate-300 leading-6",
}) => {
  return (
    <div className="w-full rounded-2xl space-y-1">
      {/* ============ */}
      {Data.map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 0}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center transition-all justify-between w-full px-4 py-2 group/icon font-medium text-left bg-black hover:bg-neutral-400 text-white  hover:text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <AiOutlineCaretDown className="w-4 h-4 text-slate-400 group-hover/icon:text-black" />
                  ) : (
                    < BiUpArrow className="w-4 h-4 text-slate-400  group-hover/icon:text-black" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                >
 
                  <div className="flex h-full w-full  gap-5 items-center justify-start relative flex-wrap ">



                    <div className="w-[42%] shadow-lg shadow-[#8b3885c2] md:w-50 lg:w-[29%]  relative p-1 bg-gray-300 flex h-100 flex-col rounded-2xl">
                      <p className="text-xl m-0 p-0">Title 1</p>
                      <p className="break-words m-0 p-0 text-left">text : ,klfelk</p>
                      <p className="break-words m-0 p-0 text-left">Contenhjbhjb</p>
                    </div>

                    <div className="w-[42%] shadow-lg shadow-[#8b3885c2] md:w-50 lg:w-[29%]  relative p-1 bg-gray-300 flex h-100 flex-col rounded-2xl">
                      <p className="text-xl m-0 p-0 ">Title 1</p>
                      <p className="break-words m-0 p-0 text-left">Contejbhjbhjb</p>
                      <p className="break-words m-0 p-0 text-left">Contejbhjbhjb</p>
                    </div>

                    <div className="w-[42%] shadow-lg shadow-[#8b3885c2] md:w-50 lg:w-[29%]  relative p-1 bg-gray-300 flex h-100 flex-col rounded-2xl">
                      <p className="text-xl m-0 p-0 ">Title 1</p>
                      <p className="break-words m-0 p-0 text-left">Contejbhjbhjb</p>
                      <p className="break-words m-0 p-0 text-left">Contejbhjbhjb</p>
                    </div>

                    <div className="w-[42%] shadow-lg shadow-[#8b3885c2] md:w-50 lg:w-[29%]  relative p-1 bg-gray-300 flex h-100 flex-col rounded-2xl">
                      <p className="text-xl m-0 p-0 ">Title 1</p>
                      <p className="break-words m-0 p-0 text-left">Contejbhjbhjb</p>
                      <p className="break-words m-0 p-0 text-left">Contejbhjbhjb</p>
                    </div>

                



                  </div>



                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}

      {/* ============ */}
    </div>
  );
};

export default Accordion;

