import React, { useState, useEffect } from 'react';
import { styled, Container, Grid, Typography, TextField, Button } from "@mui/material";

import GradientText from './GradientText';
import imgs from '../assets/imgs';

import useFilters from '../hooks/useFilters';
import CardPhoto from './CardPhoto';
import Footer from './Footer';

const Home = () => {
  const { data, handleFilterChange, responseData } = useFilters();
  const [titleFilterValue, setTitleFilterValue] = useState('');
  const [albumFilterValue, setAlbumFilterValue] = useState('');
  const [userEmailFilterValue, setUserEmailFilterValue] = useState('');

  const mappedData = responseData ? responseData.map((item) => ({
    id: item.id,
    title: item.title,
    albumTitle: item.album.title,
    username: item.album.user.name,
    user: item.album.user.username,
    email: item.album.user.email,
    website: item.album.user.website,
    phone: item.album.user.phone,
    url: item.url
  })) : [];
  

  console.log("mamappedData", mappedData);

    return (
        <>
          <StyledHome>
            <StyledHeroContainer container>
              <StyledContentContainer item xs={6}>
                <StyledHeroTitle variant="h1">
                  <GradientText>MetaPhoto</GradientText>
                </StyledHeroTitle>
                <StyledHeroDescription variant="body1">
                Capturing moments, revealing emotions; the magic of photography transforms the ordinary into extraordinary
                </StyledHeroDescription>
              </StyledContentContainer>
              <StyledImgContainer item xs={6}>
                <StyledHeroImg src={imgs.Camera} alt="hero-img" loading="lazy" />
              </StyledImgContainer>
              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={3}>
                <StyledTextField label="Photo Title" value={titleFilterValue} onChange={(e) => setTitleFilterValue(e.target.value)} />
                </Grid>
                <Grid item xs={3}>
                    <StyledTextField  label="Album Title" variant="outlined" fullWidth onChange={(e) => setAlbumFilterValue(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <StyledTextField  label="User Email" variant="outlined" fullWidth onChange={(e) => setUserEmailFilterValue(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <Button sx={{height:57, boxShadow:0}} variant="contained" color="primary" fullWidth onClick={() => {
                    handleFilterChange('title', titleFilterValue);
                    handleFilterChange('albumTitle', albumFilterValue);
                    handleFilterChange('userEmail', userEmailFilterValue);
                    }}>
                    Filter
                    </Button>
                </Grid>
               </Grid>
            </StyledHeroContainer>
            <CardPhoto photos={mappedData}/>
          </StyledHome>
          <Footer></Footer>

        </>
      );
    };
    
    export default Home;
    
    const StyledHome = styled(Container)(({ theme }) => ({
      width: "100%",
      backgroundColor: "#D9D9D9",
    }));
    
    const StyledHeroContainer = styled(Grid)(({ theme }) => ({
      width: "100%",
      height: "100%",
      paddingInline: 55,
      minHeight: "calc(100vh - 75px)",
      [theme.breakpoints.only("xl")]: {
        minHeight: "calc(100vh - 95px)",
        paddingInline: 70,
      },
    }));
    
    const StyledContentContainer = styled(Grid)(({ theme }) => ({
      minHeight: 550,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: -30,
      // border: '1px solid white',
      [theme.breakpoints.only("xl")]: {
        marginTop: -50,
        minHeight: 650,
      },
    }));
    
    const StyledImgContainer = styled(Grid)(({ theme }) => ({
      minHeight: 650,
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: -30,
      [theme.breakpoints.only("xl")]: {
        minHeight: 650,
        marginTop: -50,
      },
    }));
    
    const StyledHeroImg = styled("img")(({ theme }) => ({
      width: "100%",
      [theme.breakpoints.only("xl")]: {
        width: "100%",
      },
    }));
    
    const StyledHeroTitle = styled(Typography)(({ theme }) => ({
      fontSize: 72,
      fontWeight:800,
      marginBottom: 5,
      color: theme.palette.text.primary,
      [theme.breakpoints.only("xl")]: {
        fontSize: 77,
        marginBottom: 10,
      },
    }));
    
    const StyledHeroDescription = styled(Typography)(({ theme }) => ({
      fontSize: 16,
      marginBottom: 45,
      color: theme.palette.text.primary,
      [theme.breakpoints.only("xl")]: {
        fontSize: 22,
        marginBottom: 60,
      },
    }));
    
    const StyledTextField = styled(TextField)(({ theme }) => ({
        "& .MuiInputLabel-outlined": {
          color: "#454501 ",
        },
        "& .MuiOutlinedInput-input": {
          "&::placeholder": {
            color: "#454501 ",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#454501 ",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#454501 ",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#454501 ",
        },
      }));