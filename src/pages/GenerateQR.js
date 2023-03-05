import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import QRCode from 'qrcode.react';
import Iconify from '../components/iconify';

export default function GenerateQR() {
  const [qrValue, setQrValue] = useState('');

  const handleGenerate = () => {
    if (qrValue) {
      return alert('QR code already Generated... ');
    }

    const qrLink = `http://localhost:3000/dashboard/markEntry`;
    setQrValue(qrLink);
    console.log('generating...');
    return 'Generated..';
  };

  const downloadQR = () => {
    const canvas = document.getElementById('qr-code');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `qr-code.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setTimeout(() => URL.revokeObjectURL(downloadLink), 5000);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: GenerateQR </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Generate QR Code
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:download-outline" />}
            disabled={!qrValue}
            onClick={downloadQR}
          >
            Download QR
          </Button>
        </Stack>
        <Grid container spacing={3} sx={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            {qrValue && <QRCode id="qr-code" value={qrValue} size={290} level={'H'} includeMargin />}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:expand-outline" />}
              onClick={handleGenerate}
              disabled={qrValue}
            >
              Generate QR Code
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
