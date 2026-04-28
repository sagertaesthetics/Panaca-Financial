import { motion } from 'motion/react';
import gryffindorFounder from 'figma:asset/path-to-gryffindor.png';
import hufflepuffFounder from 'figma:asset/path-to-hufflepuff.png';
import ravenclawFounder from 'figma:asset/path-to-ravenclaw.png';
import slytherinFounder from 'figma:asset/path-to-slytherin.png';

export function CharactersSection() {
  const founders = [
    {
      name: 'Godric Gryffindor',
      house: 'Gryffindor',
      image: gryffindorFounder,
      color: '#740001',
      values: ['Courage', 'Bravery', 'Determination', 'Chivalry'],
      description: 'Valued bravery, daring, nerve, and chivalry. His notable belongings included his sword and the Sorting Hat.',
      legacy: 'The sword of Gryffindor presents itself to any worthy Gryffindor in their time of need.',
    },
    {
      name: 'Helga Hufflepuff',
      house: 'Hufflepuff',
      image: hufflepuffFounder,
      color: '#ecb939',
      values: ['Loyalty', 'Patience', 'Hard Work', 'Fair Play'],
      description: 'Valued hard work, patience, loyalty, and fair play. She brought people from different backgrounds together.',
      legacy: 'Her cup became one of Voldemort\'s Horcruxes and was later destroyed.',
    },
    {
      name: 'Rowena Ravenclaw',
      house: 'Ravenclaw',
      image: ravenclawFounder,
      color: '#0e1a40',
      values: ['Intelligence', 'Wisdom', 'Creativity', 'Wit'],
      description: 'Valued intelligence, knowledge, curiosity, creativity and wit. Her diadem was said to grant wisdom.',
      legacy: 'Her lost diadem became a Horcrux before being destroyed in the Room of Requirement.',
    },
    {
      name: 'Salazar Slytherin',
      house: 'Slytherin',
      image: slytherinFounder,
      color: '#1a472a',
      values: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness'],
      description: 'Valued ambition, cunning, leadership, and resourcefulness. He was a Parselmouth who left after disagreeing with other founders.',
      legacy: 'Created the Chamber of Secrets with a Basilisk to purge the school of Muggle-borns.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-[#8b5cf6] mb-6 text-center">Founders of Hogwarts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {founders.map((founder) => (
          <motion.div
            key={founder.name}
            className="relative bg-card rounded-lg p-4 overflow-hidden cursor-pointer border-4"
            style={{ borderColor: founder.color }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Subtle animated house effect */}
            <motion.div
              className="absolute inset-0 rounded-lg opacity-20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                background: `conic-gradient(from 0deg at 50% 50%, ${founder.color} 0%, ${founder.color} 100%)`,
                zIndex: 0,
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <img src={founder.image} alt={founder.name} className="w-32 h-32 object-cover rounded-full mb-3" />
              <h3 className="text-[#8b5cf6] font-semibold">{founder.name}</h3>
              <p className="text-sm text-muted-foreground">{founder.house}</p>
              <p className="text-xs mt-2">{founder.description}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {founder.values.map((val) => (
                  <span key={val} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">{val}</span>
                ))}
              </div>
              <p className="text-xs mt-2 italic">Legacy: {founder.legacy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}