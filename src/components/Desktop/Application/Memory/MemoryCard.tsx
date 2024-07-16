/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@mui/material";
import { css, keyframes } from "@emotion/react";

interface MemoryCardProps {
  isReveal: boolean;
  image: string;
  id: number;
  onReveal: (id: number) => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MemoryCard = ({ isReveal, image, id, onReveal }: MemoryCardProps) => {
  const onCardClicked = () => {
    if (!isReveal) {
      onReveal(id);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "150px",
        margin: "auto",
        border: "2px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        },
      }}
      onClick={onCardClicked}
    >
      {isReveal && (
        <img
          src={image}
          width="90%"
          alt="memory card"
          css={css`
            animation: ${fadeIn} 0.5s ease-in-out;
          `}
        />
      )}
    </Box>
  );
};

export default MemoryCard;
