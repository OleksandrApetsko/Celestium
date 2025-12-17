import ActionList from "./ActionList.jsx";

export default function ActionCards({ focus }) {
  return (
    <div className="w-full mb-20">
      <div className="grid md:grid-cols-2 gap-8">

        <ActionList
          label="Today, it helps to"
          title="Focus On"
          items={focus.do}
          bulletColor="bg-yellow-300/80"
          textColor="text-white/75"
        />

        <ActionList
          label="Try to stay away from"
          title="Avoid"
          items={focus.avoid}
          bulletColor="bg-white/30"
          textColor="text-white/60"
        />

      </div>
    </div>
  );
}
