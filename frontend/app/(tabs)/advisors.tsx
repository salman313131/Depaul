import React from 'react';
import { View, FlatList, Text } from 'react-native';
import AdvisorCard from '../../components/AdvisorCard';
import { FontAwesome } from '@expo/vector-icons';

const AdvisorsScreen = () => {
  const advisors = [
    {
      id: '1',
      name: 'Susan Bishop',
      image: 'https://s3-alpha-sig.figma.com/img/ad61/8192/b96051b7a065c27cb9240a060e8c6127?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZbHt6wh5DfH4rBTe2-5VF4Fy87wnmM8DjeV3l5Lc4K1AHCimGuMjiH~EzCGRxziF7CTsFVn5rIEyDNbGb3j60RxAxc~RyhyDe-aP4lIknfd-3oQ2j8iQeC1tAdhif2YnflNOOL-0pbt3lRrJwFPHvtjyiDezt4H0svLB4DOvrAx09eUr1kI6mBUwdu5ddIB65m1wwGZ8wpVkvljz~i~qotK9bA-WqSQVo8AwhObv29M7GnNtyhpsgOsVeW1yixwtbryKN7x3tZoP5s8gN5R0ZaBGSJmXpYqGSXu4oFbANpDAmYC1ClbFUYFlLHJmmfecTeQ2KPwQQ9gtknXhyUycQ__', // Replace with actual image path
      countryIcon: <FontAwesome name="globe" size={24} color="#000" />, // Placeholder icon
      languages: 'English',
      career: 'International Admissions Officer',
    },
    {
      id: '2',
      name: 'Barry Brentwood',
      image: 'https://s3-alpha-sig.figma.com/img/ad61/8192/b96051b7a065c27cb9240a060e8c6127?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZbHt6wh5DfH4rBTe2-5VF4Fy87wnmM8DjeV3l5Lc4K1AHCimGuMjiH~EzCGRxziF7CTsFVn5rIEyDNbGb3j60RxAxc~RyhyDe-aP4lIknfd-3oQ2j8iQeC1tAdhif2YnflNOOL-0pbt3lRrJwFPHvtjyiDezt4H0svLB4DOvrAx09eUr1kI6mBUwdu5ddIB65m1wwGZ8wpVkvljz~i~qotK9bA-WqSQVo8AwhObv29M7GnNtyhpsgOsVeW1yixwtbryKN7x3tZoP5s8gN5R0ZaBGSJmXpYqGSXu4oFbANpDAmYC1ClbFUYFlLHJmmfecTeQ2KPwQQ9gtknXhyUycQ__', // Replace with actual image path
      countryIcon: <FontAwesome name="globe" size={24} color="#000" />, // Placeholder icon
      languages: 'English',
      career: 'Technology Programs',
    },
    {
      id: '3',
      name: 'Ravi Gopal',
      image: 'https://s3-alpha-sig.figma.com/img/ad61/8192/b96051b7a065c27cb9240a060e8c6127?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZbHt6wh5DfH4rBTe2-5VF4Fy87wnmM8DjeV3l5Lc4K1AHCimGuMjiH~EzCGRxziF7CTsFVn5rIEyDNbGb3j60RxAxc~RyhyDe-aP4lIknfd-3oQ2j8iQeC1tAdhif2YnflNOOL-0pbt3lRrJwFPHvtjyiDezt4H0svLB4DOvrAx09eUr1kI6mBUwdu5ddIB65m1wwGZ8wpVkvljz~i~qotK9bA-WqSQVo8AwhObv29M7GnNtyhpsgOsVeW1yixwtbryKN7x3tZoP5s8gN5R0ZaBGSJmXpYqGSXu4oFbANpDAmYC1ClbFUYFlLHJmmfecTeQ2KPwQQ9gtknXhyUycQ__', // Replace with actual image path
      countryIcon: <FontAwesome name="globe" size={24} color="#000" />, // Placeholder icon
      languages: 'English, Hindi',
      career: 'Bachelor of Science, Computer Science (Software Development)',
    },
    {
      id: '4',
      name: 'Martha Obregado',
      image: 'https://s3-alpha-sig.figma.com/img/ad61/8192/b96051b7a065c27cb9240a060e8c6127?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZbHt6wh5DfH4rBTe2-5VF4Fy87wnmM8DjeV3l5Lc4K1AHCimGuMjiH~EzCGRxziF7CTsFVn5rIEyDNbGb3j60RxAxc~RyhyDe-aP4lIknfd-3oQ2j8iQeC1tAdhif2YnflNOOL-0pbt3lRrJwFPHvtjyiDezt4H0svLB4DOvrAx09eUr1kI6mBUwdu5ddIB65m1wwGZ8wpVkvljz~i~qotK9bA-WqSQVo8AwhObv29M7GnNtyhpsgOsVeW1yixwtbryKN7x3tZoP5s8gN5R0ZaBGSJmXpYqGSXu4oFbANpDAmYC1ClbFUYFlLHJmmfecTeQ2KPwQQ9gtknXhyUycQ__', // Replace with actual image path
      countryIcon: <FontAwesome name="globe" size={24} color="#000" />, // Placeholder icon
      languages: 'English, Portuguese',
      career: 'Bachelor of Science, Computer Science (Gaming Design)',
    },
  ];

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold my-8">Our Advisors</Text>
      <FlatList
        data={advisors}
        renderItem={({ item }) => (
          <AdvisorCard
            name={item.name}
            image={item.image}
            countryIcon={item.countryIcon}
            languages={item.languages}
            career={item.career}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AdvisorsScreen;
