import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import EnglishFlag from '../icons/en-flag.png';
import SpanishFlag from '../icons/sp-flag.png';

class SettingsMenu extends Component {
    languageFlag = this.props.strings.getLanguage() == 'en' ? EnglishFlag : SpanishFlag
    state = {language: 'en', order: 'chrono'}

    changeLanguage(lang) {
        this.props.strings.setLanguage(lang);
        this.languageFlag = (this.props.strings.getLanguage() == 'en' ? EnglishFlag : SpanishFlag);
        this.setState({ language: lang });
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
                <Text> {this.props.strings.langLabel} </Text>
                <Image source={this.languageFlag} style={{ width: 30, height: 30 }} />
                <Text> {this.props.strings.langName} </Text>
                <Button title={this.props.strings.changeAction} onPress={() => this.props.strings.getLanguage() == 'en' ? this.changeLanguage('sp') : this.changeLanguage('en')}> {this.props.strings.changeAction} </Button>
            </View>
        );
    }
}

export default SettingsMenu;