import { useMediaQuery, Paper, Grid, InputBase, Divider, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchComponent() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    

    return (
        <Paper component="form" sx={{ 
            p: "2px 4px", 
            display: "flex", 
            alignItems: "center", 
            width: isSmallScreen ? '100%' : 800
        }}>
            <Grid container alignItems="center">
                <Grid item xs={9} md={10}>
                    <InputBase
                        fullWidth
                        sx={{ ml: 1 }}
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Grid>

                <Grid item xs={1} md={1}>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Grid>

                <Grid item xs={2} md={1}>
                    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default SearchComponent;
