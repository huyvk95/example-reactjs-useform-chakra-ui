import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { Prompt } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { InputPhone, WrapButton } from './styles';
import { Props } from './types';

export const EmployeeFormContent: React.FC<Props> = ({ buttonTitle, onSubmit, data, loading }) => {
  const [isBlocking, setIsBlocking] = useState(false);
  const [originalValue, setOriginalValue] = useState({});
  const {
    handleSubmit,
    register,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: data });

  useEffect(() => {
    if (data) {
      reset(data);
      setOriginalValue(data);
    } else {
      setOriginalValue(getValues());
    }
  }, [data]);

  const onFormBlur = () => {
    setIsBlocking(JSON.stringify(originalValue) !== JSON.stringify(getValues()));
  };

  const onFormSubmit = (value: any) => {
    setIsBlocking(false);
    onSubmit(value);
  };

  return (
    <>
      <Prompt
        when={isBlocking}
        message="Form has been modified. You will loose your unsaved changes. Are you sure you want to close this form?."
      />
      <form onSubmit={handleSubmit(onFormSubmit)} onBlur={onFormBlur}>
        <FormControl isDisabled={loading} isInvalid={Boolean(Object.keys(errors).length)}>
          <Stack spacing={5}>
            <Box>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input
                id="firstName"
                placeholder="First Name"
                isInvalid={Boolean(errors.firstName)}
                {...register('firstName', {
                  required: 'This is required',
                  minLength: { value: 2, message: 'Minimum length should be 4' },
                  maxLength: { value: 10, message: 'Maximum length should be 10' },
                })}
              />
              <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
            </Box>
            <Box>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input
                id="lastName"
                placeholder="Last Name"
                isInvalid={Boolean(errors.lastName)}
                {...register('lastName', {
                  required: 'This is required',
                  minLength: { value: 2, message: 'Minimum length should be 4' },
                  maxLength: { value: 10, message: 'Maximum length should be 10' },
                })}
              />
              <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
            </Box>
            <Box>
              <FormLabel htmlFor="emailAddress">Email</FormLabel>
              <Input
                id="emailAddress"
                placeholder="Email"
                isInvalid={Boolean(errors.emailAddress)}
                {...register('emailAddress', {
                  required: 'This is required',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: 'invalid email address',
                  },
                })}
              />
              <FormErrorMessage>{errors.emailAddress && errors.emailAddress.message}</FormErrorMessage>
            </Box>
            <Box>
              <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  validate: (value) => {
                    if (!value) return 'This is required';
                    else if (!isValidPhoneNumber(value)) return 'Invalid phone number';
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <InputPhone
                    value={value}
                    onChange={onChange}
                    disabled={loading}
                    id="phoneNumber"
                    error={Boolean(errors.phoneNumber)}
                  />
                )}
              />
              <FormErrorMessage>{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
            </Box>
            <Box>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Controller
                control={control}
                name="gender"
                defaultValue="male"
                render={({ field: { onChange, value } }) => (
                  <RadioGroup value={value} onChange={onChange} id="gender" colorScheme="teal">
                    <HStack spacing="24px">
                      <Radio isInvalid={Boolean(errors.gender)} value="male">
                        Male
                      </Radio>
                      <Radio isInvalid={Boolean(errors.gender)} value="female">
                        Female
                      </Radio>
                    </HStack>
                  </RadioGroup>
                )}
              />
            </Box>
          </Stack>
        </FormControl>
        <WrapButton>
          <Button mt={4} colorScheme="teal" isLoading={loading} type="submit">
            {buttonTitle}
          </Button>
        </WrapButton>
      </form>
    </>
  );
};
