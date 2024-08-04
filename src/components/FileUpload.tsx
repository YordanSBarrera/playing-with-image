import { Stack, Typography } from "@mui/material";
import { useRef } from "react";

type FileUploadLinkProps = {
  onFileSelect: (file: File) => void;
};

const FileUpload = ({ onFileSelect }: FileUploadLinkProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleLinkClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Stack spacing={2} alignItems="center">
      <a onClick={handleLinkClick}>
        <Typography
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "blue",
          }}
        >
          Upload Image
        </Typography>
      </a>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.svg"
      />
    </Stack>
  );
};

export default FileUpload;
