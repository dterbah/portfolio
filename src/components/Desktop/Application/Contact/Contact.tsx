import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import cv from "@/assets/cv/cv.pdf";
import sendForm from "../../../../utils/sendForm";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(initialForm);
  const [open, setOpen] = useState(false);
  const [successSend, setSuccessSend] = useState<boolean | undefined>(
    undefined
  );

  const [sending, setSending] = useState(false);

  const canSend = formData.email && formData.message && formData.name;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSuccessSend(undefined);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    setSending(true);
    sendForm(formData)
      .then((success) => {
        setSuccessSend(success);
      })
      .finally(() => {
        setSending(false);
        setOpen(true);
      });
  };

  const openCV = () => {
    window.open(cv, "_blank");
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {t("contact.title")}
      </Typography>
      <Typography variant="body1">{t("contact.content")}</Typography>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          width: "60%",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label={t("contact.name")}
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              width: "45%",
            }}
          />
          <TextField
            label={t("contact.email")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            type="email"
            required
            sx={{
              width: "45%",
            }}
          />
        </Box>
        <TextField
          label={t("contact.message")}
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "30%" }}
            endIcon={
              !sending ? (
                <SendIcon />
              ) : (
                <CircularProgress color="secondary" size={16} />
              )
            }
            disabled={!canSend}
            onClick={handleSubmit}
            color={successSend ? "success" : "primary"}
          >
            {t("contact.submit")}
          </Button>

          <Button
            variant="contained"
            sx={{
              width: "30%",
            }}
            onClick={openCV}
            endIcon={<PictureAsPdfIcon />}
          >
            {t("contact.findMyCV")}
          </Button>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={successSend ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {successSend ? t("contact.success") : t("contact.error")}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
