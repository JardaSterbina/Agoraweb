import { useState } from 'react';

type FAQProps = {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export default function FAQ({ title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1200px] mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium">{item.question}</span>
              <span className="transform transition-transform duration-200">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
