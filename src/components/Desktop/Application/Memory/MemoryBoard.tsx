import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import reactPath from "@/assets/memory/react.png";
import typescriptPath from "@/assets/memory/typescript.png";
import pythonPath from "@/assets/memory/python.png";
import fastapiPath from "@/assets/memory/fastapi.png";
import golangPath from "@/assets/memory/golang.png";
import javascriptPath from "@/assets/memory/javascript.png";
import MemoryCard from "./MemoryCard";
import ElapsedTime from "./ElapsedTime";
import randomSortArray from "../../../../utils/randomSortArray";
import MemoryEndGame from "./MemoryEndGame";

const defaultBoard = [
  javascriptPath,
  javascriptPath,
  reactPath,
  reactPath,
  golangPath,
  golangPath,
  typescriptPath,
  typescriptPath,
  pythonPath,
  pythonPath,
  fastapiPath,
  fastapiPath,
];

interface MemoryBoardProps {
  onGameFinished: () => void;
  refresh: boolean;
}

const MemoryBoard = ({ onGameFinished, refresh }: MemoryBoardProps) => {
  const [cardsRevealed, setCardsRevealed] = useState<boolean[]>(
    defaultBoard.map(() => false)
  );
  const [selectedCard, setSelectedCard] = useState<number | undefined>(
    undefined
  );

  const [board, setBoard] = useState(randomSortArray(defaultBoard));

  const gameFinished = useMemo(
    () => cardsRevealed.every((card) => card),
    [cardsRevealed]
  );

  useEffect(() => {
    if (gameFinished) {
      onGameFinished();
    }
  }, [gameFinished]);

  useEffect(() => {
    if (refresh) {
      setCardsRevealed(defaultBoard.map(() => false));
      setBoard(randomSortArray(defaultBoard));
    }
  }, [refresh]);

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
      <ElapsedTime isStop={!refresh} />
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
              width: "25%",
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
      {gameFinished && <MemoryEndGame />}
    </Box>
  );
};

export default React.memo(MemoryBoard);
