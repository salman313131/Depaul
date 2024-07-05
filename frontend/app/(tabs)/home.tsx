import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Filters from '../../components/Filters';
import ProgramCard from '../../components/ProgramCard';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

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
          imageUrl: 'https://s3-alpha-sig.figma.com/img/4bfa/d134/035bf7db4ec485a44e5a8384c59da98d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DTJkZGiT3T67u9jooPz7bO4qMY8RXRwV8BCONlkV~TmMtVmPDd6rolRRIAl~QwImd03aLPc48KouVn6Zrnok9sWcQpH-DX3Rkt7gxup90HCzcYgYrI39y4ST4AINP-HnBWtH9K1UDb-0B3JHLOU6A7iTSxfV0YxAn9NBg6rfq6lFDfz62BIBqC6Vn3IK35NHMBYRXGpmp0dLf1wGQvbIpKHpwswHS2PX00274FE203pjwyoNjdCc3WFtRwfYFycA~JjpuwHer78YON7tzGeEjAGTCN8XjJCVmyOrvQLK~A9VPw4mqrbPfKv4-4XndSVfH3rhgyuRrkYZSz4JOEqLnQ__',
        },
        {
          title: 'Game Systems',
          skills: ['Game Design', 'Programming', 'Graphics'],
          imageUrl: 'https://s3-alpha-sig.figma.com/img/7fe2/7130/cb72fb6294029e285151457c1fd2835d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbHXxSD2bWhHw~IvECWx7sRmjuZFLEPclIXfD2B~h80kJgPusckwForE-TwQIF4DHQRyRyG44d7ROLI1mCEeApXu2A1Y9daq0CxIVGmaKN~jYT7glukFxMlU~uI2P2ZwCE-xt0LQ~wHy7bz-c~JHsV32zKN2jXV4cWOuvRbEi3-tr--Ynafo7ztrubxvUQwAkly1IP84b-pQHGJccj5D2-C6W1~uEb8zQM3AEx1JDum6ALJtrLu9T4tMeFGUlZ-h3IpoknkELQE-rm69ikRSxltYp3SRDpV~gHe8T6SV-MS3ptuyNpkc6~HFzlfYI2p5aTFHkdtzlYs4f~jtqKm2cg__',
        },
      ],
    },
    {
      title: 'Bachelor of Science in Cyber Security',
      modules: [
        {
          title: 'Network and Infrastructure',
          skills: ['Coding', 'Testing', 'Debugging'],
          imageUrl: 'https://s3-alpha-sig.figma.com/img/4bfa/d134/035bf7db4ec485a44e5a8384c59da98d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DTJkZGiT3T67u9jooPz7bO4qMY8RXRwV8BCONlkV~TmMtVmPDd6rolRRIAl~QwImd03aLPc48KouVn6Zrnok9sWcQpH-DX3Rkt7gxup90HCzcYgYrI39y4ST4AINP-HnBWtH9K1UDb-0B3JHLOU6A7iTSxfV0YxAn9NBg6rfq6lFDfz62BIBqC6Vn3IK35NHMBYRXGpmp0dLf1wGQvbIpKHpwswHS2PX00274FE203pjwyoNjdCc3WFtRwfYFycA~JjpuwHer78YON7tzGeEjAGTCN8XjJCVmyOrvQLK~A9VPw4mqrbPfKv4-4XndSVfH3rhgyuRrkYZSz4JOEqLnQ__',
        },
        {
          title: 'Risk Management',
          skills: ['Game Design', 'Programming', 'Graphics'],
          imageUrl: 'https://s3-alpha-sig.figma.com/img/7fe2/7130/cb72fb6294029e285151457c1fd2835d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbHXxSD2bWhHw~IvECWx7sRmjuZFLEPclIXfD2B~h80kJgPusckwForE-TwQIF4DHQRyRyG44d7ROLI1mCEeApXu2A1Y9daq0CxIVGmaKN~jYT7glukFxMlU~uI2P2ZwCE-xt0LQ~wHy7bz-c~JHsV32zKN2jXV4cWOuvRbEi3-tr--Ynafo7ztrubxvUQwAkly1IP84b-pQHGJccj5D2-C6W1~uEb8zQM3AEx1JDum6ALJtrLu9T4tMeFGUlZ-h3IpoknkELQE-rm69ikRSxltYp3SRDpV~gHe8T6SV-MS3ptuyNpkc6~HFzlfYI2p5aTFHkdtzlYs4f~jtqKm2cg__',
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
      <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity className="p-2">
            <Ionicons name="menu" size={24} />
          </TouchableOpacity>
          <View className="flex-row">
            <TouchableOpacity className="p-2 mr-2">
              <FontAwesome name="search" size={24} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <MaterialIcons name="notifications" size={24} />
            </TouchableOpacity>
          </View>
        </View>
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
