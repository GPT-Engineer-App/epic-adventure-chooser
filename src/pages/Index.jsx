import { Container, Text, VStack, Button, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [story, setStory] = useState("You find yourself in a dark forest. There are two paths ahead of you.");
  const [choices, setChoices] = useState([
    { text: "Take the left path", nextStory: "You encounter a wild beast!" },
    { text: "Take the right path", nextStory: "You find a hidden treasure!" },
  ]);

  const handleChoice = (nextStory) => {
    setStory(nextStory);
    setChoices([]); // Clear choices for now, can be updated to continue the story
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Choose Your Own Adventure</Heading>
        <Text fontSize="lg">{story}</Text>
        <Box>
          {choices.map((choice, index) => (
            <Button key={index} onClick={() => handleChoice(choice.nextStory)} m={2}>
              {choice.text}
            </Button>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;