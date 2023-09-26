import React from 'react';
import { View } from 'react-native';

import WrongData from '../../components/wrongData/WrongData';
import { MovieList } from '../../components/movieList/MovieList';
import { ActorsList } from '../../components/actorsList/ActorsList';
import { LoadingIndicator } from '../../components/loadingIndicator/LoadingIndicator';
import { ScrollableComponent } from '../../components/scrollable/ScrollableComponent';
import { HorizontalFlatListWithDots } from '../../components/horizontalFlatListWithDots/HorizontalFlatListWithDots';

import { t } from '../../locales';

import { styles } from './style';
import { GlobalStyles } from '../../theme';

import { showErrorMessage } from '../../utils/utils';
import { LanguageNSKeys, Routes } from '../../utils/constants';
import { getPopularActorsApi, getPopularMoviesApi, getTopRatedMoviesApi } from '../../utils/api/dataProvider/dataProvider';

class HomeScreen extends React.Component {
    state = {
        loading: true,
        wrongData: false,
        popularActors: [],
        popularMovies: [],
        topRatedMovies: [],
        popularImageWidth: 0,
        popularImageHeight: 0
    }

    componentDidMount() {
        this.initData();
    }

    render() {
        const { loading, wrongData, popularMovies, popularActors, topRatedMovies, popularImageWidth, popularImageHeight } = this.state;
        if (loading) return (<LoadingIndicator />);
        if (wrongData) return this.renderWrongDataContent();
        const { popularActorsTitle, topRatedMoviesTitle } = t('home', LanguageNSKeys.bottomNavigationScreens);
        return (
            <View style={styles.container}>
                <ScrollableComponent
                    style={styles.content}
                    keyboardShouldPersistTaps={'handled'}
                >
                    {popularMovies &&
                        <HorizontalFlatListWithDots
                            showDots
                            itemsList={popularMovies.slice(0, 10)}
                            onPressItem={this.onPressMovie}
                            // imageStyle={styles.ImageStyle(popularImageHeight, popularImageWidth )}
                            imageStyle={styles.ImageStyle(3840, 2160)}
                        />
                    }
                    {popularActors &&
                        <ActorsList
                            data={popularActors}
                            title={popularActorsTitle}
                            onPressItem={this.onPressActorIcon}
                        />
                    }
                    {topRatedMovies &&
                        <MovieList
                            data={topRatedMovies}
                            title={topRatedMoviesTitle}
                            onPressItem={this.onPressMovie}
                        />
                    }
                    <View style={styles.emptyContent()} />
                </ScrollableComponent>
            </View>
        )
    }

    onPressMovie = (movieId) => {
        const { navigation } = this.props;
        navigation.navigate(Routes.movieDetails, { movieId });
    }

    onPressActorIcon = (actorId) => {
        console.log('actorId ==== ', actorId)
    }

    renderWrongDataContent = () => (
        <WrongData
            buttonClick={this.clickOnRetryButton}
            contentStyle={GlobalStyles.wrongDataContent}
        />
    );

    clickOnRetryButton = () => this.setState({ wrongData: false });

    initData = async () => {
        try {

            const [
                { data: { results: popularMovies } },
                { data: { results: popularActors } },
                { data: { results: topRatedMovies } }
            ] = await Promise.all([
                getPopularMoviesApi(),
                getPopularActorsApi(),
                getTopRatedMoviesApi()
            ]);
            // Will be improved
            // Image.getSize(`${IMAGE_POSTER_URL}${topRatedMovies[0].poster_path}`, (width, height) => {
            //     console.log('width, height === ', width, height)
            //     this.setState({ popularImageWidth: width, popularImageHeight: height });
            // });
            console.log('similarMovies === ', popularActors)
            this.initializeState(popularMovies, popularActors, topRatedMovies);
        } catch (err) {
            this.setState({ loading: false, wrongData: true });
            showErrorMessage(err);
        }
    }

    initializeState = (popularMovies = [], popularActors = [], topRatedMovies = []) => {
        this.setState({
            loading: false,
            popularMovies,
            popularActors,
            topRatedMovies
        })
    }
}


export { HomeScreen };