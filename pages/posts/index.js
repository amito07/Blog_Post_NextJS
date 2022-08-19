import { Box, Container, Grid, Paper } from "@mui/material";
import CardComponent from "../../Components/Card";
import ImageSlider from "../../Components/Slider/ImageSlider";
import { SliderData } from "../../Components/Slider/SliderData";
import { item } from "../../utils/DemoData";
const index = () => {
  return (
    <>
      <Container maxWidth="lg" className="app">
        {/* <ImageSlider slides={SliderData}/> */}
        <Grid container spacing={6}>
          {item.map((v, i) => {
            return (
              <>
                <Grid item xs={12} sm={6} lg={3}>
                  <CardComponent key={i} value={v} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default index;
