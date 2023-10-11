import React from "react";
import { Typography, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";



function Pagination({ currentPage, setPage, totalPages }) {


  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1.5rem",
      }}
    >
      <Button
        // startIcon={<NavigateBeforeIcon />}
        onClick={handlePrev}
        variant="contained"
        style={{
          margin: "30px 2px",
        }}
        color="primary"
        type="button"
        size="medium"
      >
        <NavigateBeforeIcon />
      </Button>
      <Typography
        variant="h6"
        style={{
          margin: "0 30px !important",
          color: "white",
        }}
      >
        {currentPage}
      </Typography>
      <Button
        // endIcon={<NavigateNextIcon />}
        onClick={handleNext}
        variant="contained"
        style={{
          margin: "30px 2px",
        }}
        color="primary"
        type="button"
        size="medium"
      >
        <NavigateNextIcon />
      </Button>
    </div>
  );
}

export default Pagination;
