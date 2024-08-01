export default function About() {
  return (
    <section>
      <div className="flex items-center py-10 flex-wrap">
        <div className="flex-grow w-96 px-10 sm:px-0 py-10">
          <h1 className="text-2xl font-semibold text-gray-700">
            Case Solution Guru Strives For Quality Service And 100% Satisfaction
            Of Customers!
          </h1>
          <p className="text-sm mt-1 text-gray-500 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            labore nihil. Totam placeat rerum fugit dicta modi maiores earum
            harum, culpa excepturi distinctio velit! Adipisci rerum ipsam quos
            provident autem.
          </p>
          <button className="bg-[var(--button-bg)] mt-5 text-sm text-white px-4 py-[0.7rem] rounded-md shadow-lg">
            Write my essay
          </button>
        </div>
        <div className="flex-grow flex-center py-10">
          <div className="size-60 overflow-hidden bg-white rounded-3xl">
            <img src="/20220623_121328.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col item-center">
        <h2 className="text-center text-3xl font-poopins">Services we Provide</h2>
        <p className="text-center text-sm text-gray-500 mt-2 px-32">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
          temporibus iure.
        </p>
      </div>
    </section>
  );
}
