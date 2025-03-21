"use client";

import { forwardRef, InputHTMLAttributes, ForwardedRef } from "react";
import getClasses, { formatClasses } from "./classes";

const RadioStyled = forwardRef(
  (
    {
      options = [
        {
          label: "",
          value: "",
          checked: false,
          name: undefined,
        },
      ],
      title,
      radioNames,
      className = "",
      titleClassName = "",
      containerClassName = "",
      optionsContainerClassName = "",
      optionClassName = "",
      labelClassName = "",
      errorClassName = "",
      error,
      tagSize = "md",
      disabled,
      defaultCheck,
      ...attributes
    }: {
      options: {
        label: string;
        value: string;
        checked?: boolean;
        name?: string;
      }[];
      title?: string;
      tagSize?: "xs" | "sm" | "md" | "lg" | "xl" | "custom";
      radioNames?: string;
      className?: string;
      titleClassName?: string;
      containerClassName?: string;
      optionsContainerClassName?: string;
      optionClassName?: string;
      labelClassName?: string;
      errorClassName?: string;
      error?: string;
      disabled?: boolean;
      defa?: string;
      defaultCheck?: string;
    } & InputHTMLAttributes<HTMLElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div
      className={formatClasses(`
        flex 
        flex-col 
        w-full 
        ${containerClassName}`)}
    >
      <h3
        className={formatClasses(`
          ${getClasses("title", { tagSize, error })}
          ${titleClassName}`)}
      >
        {title}
      </h3>
      <div
        className={formatClasses(`
          flex
          gap-5
          flex-wrap
          mb-2
          ${optionsContainerClassName}`)}
      >
        {options.map(({ value, label, checked, name }, i) => (
          <label
            className={formatClasses(`
              flex 
              justify-center 
              items-center 
              gap-2 
              ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
              ${optionClassName}`)}
            key={i}
          >
            <input
              className={formatClasses(`
                ${getClasses("input", { tagSize, error, disabled })}
                ${className}`)}
              ref={ref}
              type="radio"
              id={value}
              defaultChecked={checked || value === defaultCheck}
              name={name || radioNames}
              value={value}
              disabled={disabled}
              {...attributes}
            />
            <span
              className={formatClasses(`
                ${getClasses("label", { tagSize, error })}
                ${labelClassName}`)}
            >
              {label}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p
          className={formatClasses(`
            ${getClasses("error", { tagSize })}
            ${errorClassName}`)}
        >
          {error}
        </p>
      )}
    </div>
  )
);

RadioStyled.displayName = "RadioStyled";

export default RadioStyled;
