import React from "react";
import styled from "styled-components";
import { VoidExpression } from "typescript";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

// React Component는 children이라는 prop을 가질 수 있다.
export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit,
}) => <form onSubmit={onFormSubmit}>{children}</form>;
