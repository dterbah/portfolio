import React, { useMemo, useState, useCallback } from "react";
import { Box } from "@mui/material";
import reactPath from "@/assets/memory/react.png";
import typescriptPath from "@/assets/memory/typescript.png";
import pythonPath from "@/assets/memory/python.png";
import MemoryCard from "./MemoryCard";
import ElapsedTime from "./ElapsedTime";
import randomSortArray from "../../../../utils/randomSortArray";

const defaultBoard = [
  reactPath,
  reactPath,
  typescriptPath,
  typescriptPath,
  pythonPath,
  pythonPath,
];

const MemoryBoard = () => {
  const [cardsRevealed, setCardsRevealed] = useState<boolean[]>(
    defaultBoard.map(() => false)
  );
  const [selectedCard, setSelectedCard] = useState<number | undefined>(
    undefined
  );

  const board = useMemo(() => randomSortArray(defaultBoard), []);

  const gameFinished = useMemo(
    () => cardsRevealed.every((card) => card),
    [cardsRevealed]
  );

  console.log(board);

  const revealCard = useCallback(
    (id: number) => {
      setCardsRevealed((prevCardsRevealed) => {
        const newCardsRevealed = [...prevCardsRevealed];
        newCardsRevealed[id] = true;

        if (selectedCard === undefined) {
          setSelectedCard(id);
        } else {
          const currentCard = board[selectedCard];
          const comingCard = board[id];

          if (currentCard !== comingCard) {
            const saveSelectedCard = selectedCard;
            setTimeout(() => {
              setCardsRevealed((prev) => {
                const newCardsRevealedTimeout = [...prev];
                newCardsRevealedTimeout[id] = false;
                newCardsRevealedTimeout[saveSelectedCard] = false;
                return newCardsRevealedTimeout;
              });
            }, 1000);
          }
          setSelectedCard(undefined);
        }
        return newCardsRevealed;
      });
    },
    [board, selectedCard]
  );

  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <ElapsedTime isStop={gameFinished} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {board.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: "20%",
              mb: 1,
            }}
          >
            <MemoryCard
              isReveal={cardsRevealed[index]}
              image={card}
              id={index}
              onReveal={revealCard}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(MemoryBoard);
