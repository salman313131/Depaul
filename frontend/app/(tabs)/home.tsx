import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Filters from '../../components/Filters';
import ProgramCard from '../../components/ProgramCard';

const HomeScreen = () => {
  // from academic interests
  const [degree, setDegree] = useState('Bachelors');
  const [program, setProgram] = useState('Computer Science');
  const [specialization, setSpecialization] = useState('Artificial Intelligence');

  // create a useEffect to get this data from backend

  // dummy data
  const programs = [
    {
      title: 'Bachelor of Science in Computer Science',
      modules: [
        {
          title: 'Software Development',
          skills: ['Coding', 'Testing', 'Debugging'],
          imageUrl: '',
        },
        {
          title: 'Game Systems',
          skills: ['Game Design', 'Programming', 'Graphics'],
          imageUrl: '',
        },
      ],
    },
    {
      title: 'Bachelor of Science in Cyber Security',
      modules: [
        {
          title: 'Network and Infrastructure',
          skills: ['Coding', 'Testing', 'Debugging'],
          imageUrl: '',
        },
        {
          title: 'Risk Management',
          skills: ['Game Design', 'Programming', 'Graphics'],
          imageUrl: '',
        },
      ],
    },
    // Add more programs as needed
  ];

  const filteredPrograms = programs.filter((program) => {
    // Add filtering logic based on degree, program, and specialization
    // Placeholder logic
    return true;
  });

  return (
    <View className="flex-1 p-4 mt-5">
      <Filters
        degree={degree}
        setDegree={setDegree}
        program={program}
        setProgram={setProgram}
        specialization={specialization}
        setSpecialization={setSpecialization}
      />
      <Text className="text-2xl font-bold mb-5">Recommended Programs</Text>
      <FlatList
        data={filteredPrograms}
        renderItem={({ item }) => (
          <ProgramCard title={item.title} modules={item.modules} />
        )}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
