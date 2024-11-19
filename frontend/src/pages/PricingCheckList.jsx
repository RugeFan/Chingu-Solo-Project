import React, { memo } from "react";
import { allRoomsCleaningTasks, bathroomCleaningTasks, housekeepingCleaningTasks, kitchenCleaningTasks } from "../constants";
import CheckListItem from "../components/CheckListItem";
import PricingCheckListTitle from "../components/PricingCheckListTitle";
import { checklist } from "../assets/images";



const PricingCheckList = memo(() => {

  return <div>
    <div className="h-[7vh]" />
    <div>
      <div className="flex justify-center items-center mt-6 text-3xl sm:hidden">Cleaning Checklist</div>
      <div className="flex justify-between w-[70vw] mx-auto max-lg:w-[90vw] ">
        <div className="flex flex-col justify-center max-lg:hidden ">
          <div className="text-6xl ">Cleaning</div>
          <div className="text-6xl ">Checklist</div>
        </div>
        <div className="w-[50vw] h-[60vh] sm:mt-20 overflow-hidden rounded-3xl flex justify-center items-center max-lg:w-full max-lg:h-[30vh] mt-4
        ">
          <img
            src={checklist}
            alt="checklist"
            className="w-full h-full object-cover object-center-right"
          />
        </div>

      </div>
      <div className="flex justify-center items-center sm:my-20 text-4xl max-lg:mb-10">
        {/* <div
          className="border-black border-4 rounded-3xl px-3 py-1 cursor-pointer
          transform transition-transform duration-200 hover:-translate-y-1 max-lg:hidden"
          onClick={() => { dispatch(showQuoteForm()) }}>
          Get Quote Now
        </div> */}
      </div>
    </div>
    <div className="">
      <PricingCheckListTitle title="All Rooms" />
      {
        allRoomsCleaningTasks.map(task => <CheckListItem name={task.name} general={task.general} spring={task.spring} key={task.name} />)
      }
      <PricingCheckListTitle title="Bathroom" />
      {
        bathroomCleaningTasks.map(task => <CheckListItem name={task.name} general={task.general} spring={task.spring} key={task.name} />)
      }
      <PricingCheckListTitle title="Kitchen" />
      {
        kitchenCleaningTasks.map(task => <CheckListItem name={task.name} general={task.general} spring={task.spring} key={task.name} />)
      }
      <PricingCheckListTitle title="Other" />
      {
        housekeepingCleaningTasks.map(task => <CheckListItem name={task.name} general={task.general} spring={task.spring} key={task.name} />)
      }
    </div>
  </div>;
});

export default PricingCheckList;
