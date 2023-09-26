import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import WrongData from '../../components/wrongData/WrongData';
import { LoadingIndicator } from '../../components/loadingIndicator/LoadingIndicator';
import { ScrollableComponent } from '../../components/scrollable/ScrollableComponent';
import { SimpleNavBarComponent } from '../../components/simpleNavBar/SimpleNavBarComponent';

import { styles } from './style';
import { GlobalStyles } from '../../theme';

import { generateUUID } from '../../utils/utils';
import { IMAGE_POSTER_URL } from '../../../config';
import { getMovieActorsApi, getMovieDetailsApi, getSimilarMoviesApi } from '../../utils/api/dataProvider/dataProvider';

import withPreventDoubleClick from '../../../withPreventDoubleClick';
import { LanguageNSKeys, Routes } from '../../utils/constants';
import { t } from '../../locales';
import { ActorsList } from '../../components/actorsList/ActorsList';
import { MovieList } from '../../components/movieList/MovieList';
import { navigationPopToTop, navigationRefReset, navigationReset } from '../../../navigation';
const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);

class MovieDetails extends React.Component {
    state = {
        loading: true,
        wrongData: false,
        movieDetails: {},
        movieActors: [],
        similarMovies: []
    }

    componentDidMount() {
        this.initData();
    }

    render() {
        const {
            loading, wrongData, movieActors, similarMovies,
            movieDetails: { poster_path, original_title, release_date, runtime, budget, overview, genres } = {}
        } = this.state;
        if (loading) return (<LoadingIndicator />);
        if (wrongData) return this.renderWrongDataContent();
        const componentContent = t('movieDetails', LanguageNSKeys.movieDetails);
        return (
            <>
                <SimpleNavBarComponent
                    title={original_title}
                    clickOnLeftIcon={this.goBack}
                />
                <ScrollableComponent style={styles.container}>
                    <View style={styles.content}>
                        {this.renderTopContent(poster_path, release_date, runtime, budget, componentContent)}
                        {this.renderCenterContent(overview, genres, componentContent)}
                        {this.renderVideoContent()}
                        {movieActors && this.renderActorsContent(movieActors, componentContent)}
                        {similarMovies && this.renderSimilarMoviesContent(similarMovies, componentContent)}
                        <View style={styles.emptyContent} />
                    </View>
                </ScrollableComponent>
            </>
        )
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    renderTopContent = (imagePath, release_date, runtime, budget, { releaseDateText, movieDurationText, movieDurationSuffix, movieBudgetText }) => (
        <View style={styles.topContent}>
            <View>
                <Image
                    source={{ uri: `${IMAGE_POSTER_URL}${imagePath}` }}
                    // WILL_BE Improved
                    style={styles.titleImage(750, 1125)}
                    resizeMode={GlobalStyles.center}
                />
            </View>
            <View style={styles.topCenterContent}>
                <Text style={styles.middleTitle}>
                    {releaseDateText}
                </Text>
                <Text style={styles.middleDescription}>
                    {release_date}
                </Text>
                <Text style={styles.middleTitle}>
                    {movieDurationText}
                </Text>
                <Text style={styles.middleDescription}>
                    {runtime} {movieDurationSuffix}
                </Text>
                <Text style={styles.middleTitle}>
                    {movieBudgetText}
                </Text>
                <Text style={styles.middleDescription}>
                    $ {budget}
                </Text>
            </View>
        </View>
    );

    renderCenterContent = (overview, genres, { movieOverviewText, movieGenreText }) => (
        <View style={styles.centerContent}>
            <Text style={styles.middleTitle}>
                {movieOverviewText}
            </Text>
            <Text style={styles.middleDescription}>
                {overview}
            </Text>
            <Text style={styles.middleTitle}>
                {movieGenreText}
            </Text>
            <View style={styles.genreContainer}>
                {this.renderGenreContent(genres)}
            </View>
        </View>
    );

    renderGenreContent = (genres) => genres.map(({ name, id }) => (
        <TouchableOpacityEx
            key={generateUUID()}
            activeOpacity={0.8}
            style={styles.genreItem}
            onPress={() => this.clickOnGenre(id)}
        >
            <Text style={[styles.middleDescription, { marginBottom: 0 }]}>{name}</Text>
        </TouchableOpacityEx>
    ));

    clickOnGenre = (id) => {
        console.log('id === ', id)
    }

    renderVideoContent = () => (
        <View style={styles.videoContent}>
            <Text style={styles.middleDescription}>
                Here will be video in the future
            </Text>
        </View>
    );

    renderActorsContent = (movieActors, { topBilledCast }) => (
        <ActorsList
            data={movieActors}
            title={topBilledCast}
            onPressItem={this.onPressActorIcon}
        />
    );

    onPressActorIcon = (actorId) => {
        console.log('actorId ==== ', actorId)
    }

    renderSimilarMoviesContent = (similarMovies, { recommendations }) => (
        <MovieList
            data={similarMovies}
            title={recommendations}
            onPressItem={this.onPressMovie}
        />
    );

    onPressMovie = (movieId) => {
        const { navigation } = this.props;
        navigationPopToTop(navigation);
        navigation.navigate(Routes.movieDetails, { movieId });
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
            const { route: { params: { movieId } } } = this.props;

            const [
                { data: movieDetails },
                { data: { cast: movieActors } },
                { data: { results: similarMovies } }
            ] = await Promise.all([
                getMovieDetailsApi(movieId),
                getMovieActorsApi(movieId),
                getSimilarMoviesApi(movieId)
            ]);
            this.initializeState(movieDetails, movieActors, similarMovies);
        } catch (err) {
            this.setState({ loading: false, wrongData: true });
            showErrorMessage(err);
        }

    }

    initializeState = (movieDetails = [], movieActors = [], similarMovies = []) => {
        this.setState({
            loading: false,
            movieDetails,
            movieActors,
            similarMovies
        })
    }
}

export { MovieDetails };