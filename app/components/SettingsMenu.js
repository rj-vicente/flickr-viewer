import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import EnglishFlag from '../icons/en-flag.png';
import SpanishFlag from '../icons/sp-flag.png';

class SettingsMenu extends Component {
    languageFlag = this.props.strings.getLanguage() == 'en' ? EnglishFlag : SpanishFlag
    orderIcon = this.props.order == 'chrono' ? EnglishFlag : SpanishFlag //matar este
    orderName = this.props.order == 'chrono' ? this.props.strings.orderNameChrono : this.props.strings.orderNameAlpha
    // orderIcon = this.props.order == 'chrono' ? ChronoIcon : AlphaIcon
    state = { language: 'en', order: 'chrono' }

    changeLanguage(lang) {
        this.props.strings.setLanguage(lang);
        this.languageFlag = (lang == 'en' ? EnglishFlag : SpanishFlag);
        this.setState({ language: lang });
    };

    changeOrder(ord) {
        this.state.order = ord;
        this.props.order = ord;
        this.orderIcon = (ord == 'chrono' ? EnglishFlag : SpanishFlag);
        this.orderName = ord == 'chrono' ? this.props.strings.orderNameChrono : this.props.strings.orderNameAlpha
        this.setState({ order: ord });
    };

    render() {
        return (
            <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 10
                }}>
                <View>
                    <Text> {this.props.strings.langLabel} </Text>
                    <Image source={this.languageFlag} style={{ width: 30, height: 30 }} />
                    <Text> {this.props.strings.langName} </Text>
                    <Button title={this.props.strings.changeAction} onPress={() => this.props.strings.getLanguage() == 'en' ? this.changeLanguage('sp') : this.changeLanguage('en')}> {this.props.strings.changeAction} </Button>
                </View>
                <View>
                    <Text> {this.props.strings.orderLabel} </Text>
                    <Image source={this.orderIcon} style={{ width: 30, height: 30 }} />
                    <Text> {this.state.order == 'chrono' ? this.props.strings.orderNameChrono : this.props.strings.orderNameAlpha} </Text>
                    <Button title={this.props.strings.changeAction} onPress={() => this.state.order == 'chrono' ? this.changeOrder('alpha') : this.changeOrder('chrono')}> {this.props.strings.changeAction} </Button>
                </View>
            </View>
        );
    }
}

export default SettingsMenu;