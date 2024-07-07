import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ChatScreen = () => {
  // TODO connect to backend
  const [messages, setMessages] = useState<{ id: string; text: string; isUser: boolean }[]>([
    {
      id: '1',
      text: 'What are my chances of receiving an offer for the Bachelors degree in Gaming development?',
      isUser: true,
    },
    {
      id: '2',
      text: "DePaul's middle 50% SAT range for admitted students typically falls between 1090-1290. An SAT score of 1250 places you in the upper range of this middle 50%, which is favorable. DePaul generally requires a minimum IELTS score of 6.5 for undergraduate admissions. Your IELTS score of 7 exceeds this requirement, indicating strong English proficiency. If your high school GPA and other application components are similarly strong, you have a good chance of being admitted to the Bachelor of Science in Game Programming or Game Design program at DePaul.",
      isUser: false,
    },
  ]);
  const [messageInput, setMessageInput] = useState('');

  const handleSend = () => {
    if (messageInput.trim()) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text: messageInput, isUser: true },
        { id: (Date.now() + 1).toString(), text: 'This is a bot response', isUser: false }, // dummy TODO
      ]);
      setMessageInput('');
    }
  };

  const renderItem = ({ item }: { item: { text: string; isUser: boolean } }) => (
    <View
      className={`mb-4 p-5 rounded-3xl max-w-3/4 ${item.isUser ? 'bg-[#0B60A3] self-end rounded-br-none' : 'bg-gray-300 self-start rounded-bl-none'}`}
    >
      <Text className={`text-white ${item.isUser ? 'text-white' : 'text-gray-800'}`}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
      <View className="flex-row items-center p-4 bg-white border-t border-gray-300">
        <TextInput
          value={messageInput}
          onChangeText={setMessageInput}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <TouchableOpacity
          onPress={handleSend}
          className="ml-2 p-2 items-center justify-center"
        >
          <FontAwesome name="send" size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
