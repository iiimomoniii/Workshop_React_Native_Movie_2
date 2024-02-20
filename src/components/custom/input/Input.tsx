import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'
import React from 'react'
import { useForm, Controller, FieldValues, Control } from 'react-hook-form';
interface InputProps extends TextInputProps {
    placeholder: string;
    secureTextEntry?: boolean;
    name: string;
    control: Control<FieldValues, any, FieldValues>;
    rules: any;
}

const Input: React.FC<InputProps> = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
    return (
        <Controller control={control} name={name} rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8' }]}>
                        <TextInput style={[styles.input]} value={value} onChangeText={onChange} onBlur={onBlur} placeholder={placeholder} secureTextEntry={secureTextEntry} />
                    </View>
                    {error && (<Text style={{ color: 'red', alignSelf: 'stretch', marginLeft: 30 }}>{error.message || 'Error'}</Text>)}</>
            )
            } />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {

    }
})

export default Input