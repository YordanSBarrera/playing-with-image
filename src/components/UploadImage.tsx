import { IconButton, Stack, Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import FileUpload from "./FileUpload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const UploadSignature = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context && imageUrl) {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        canvas.width = 500;
        canvas.height = 400;
        context.drawImage(img, 0, 0, 500, 400);
      };
    }
  }, [imageUrl]);

  const onUploadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const handleCleanUploadData = () => {
    setImageUrl(null);
  };

  if (!imageUrl) {
    return (
      <Stack justifyContent="center" alignItems="center" height="250px">
        <FileUpload onFileSelect={onUploadFile} />
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack direction="row" width="100%" justifyContent="flex-end">
        <Tooltip title="Remove">
          <IconButton onClick={handleCleanUploadData}>
            <DeleteForeverIcon fontSize="small" color="error" />
          </IconButton>
        </Tooltip>
      </Stack>
      <canvas ref={canvasRef} />
    </Stack>
  );
};

export default UploadSignature;
