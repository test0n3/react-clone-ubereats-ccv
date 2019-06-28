/** @jsx jsx */
import { jsx } from "@emotion/core";

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        backgroundColor: "black",
        border: "1px solid black",
        borderRadius: ".25rem",
        color: "white",
        cursor: "pointer",
        fontSize: ".8rem",
        padding: ".75rem 0",
        transition: "all 200ms ease",
        textAlign: "center",
        textTransform: "uppercase",
        width: "100%",
        "&:hover": {
          backgroundColor: "white",
          color: "black"
        },
        ...styles
      }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        borderRadius: ".5em",
        boxSizing: "border-box",
        border: "1px solid #fff",
        padding: "15px",
        width: "100%",
        transitionProperty: "all",
        transitionDuration: "0.25s",
        "&:hover": {
          cursor: "pointer",
          border: "1px solid #e5edef",
          boxShadow: "-1px 2px 5px 0px rgba(0,0,0,.12)"
        },
        ...styles
      }}
    />
  );
}

function Input({ styles, ...props }) {
  return (
    <input
      {...props}
      css={{
        background: "none",
        border: "1px solid #eaeaea",
        borderRadius: ".25rem",
        boxSizing: "border-box",
        display: "block",
        fontSize: "1rem",
        padding: ".5rem",
        width: "100%",
        "&:focus": {
          outline: "none",
          borderColor: "#444444"
        },
        ...styles
      }}
    />
  );
}

function Select({ styles = {}, children, ...props }) {
  return (
    <div
      css={{
        WebkitAppearance: "none",
        color: "rgb(0, 0, 0)",
        display: "inline-flex",
        height: 40,
        fontSize: 12,
        textTransform: "uppercase",
        userSelect: "none",
        fontWeight: 100,
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 0,
        width: "auto",
        minWidth: 160,
        background: "rgb(255, 255, 255)",
        outline: "none",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgb(234, 234, 234)",
        borderImage: "initial",
        overflow: "hidden",
        transition:
          "border 0.2s ease 0s, background 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s",
        borderRadius: 4,
        ...(styles.container || {})
      }}
    >
      <select
        css={{
          height: "100%",
          boxShadow: "none",
          color: "rgb(0, 0, 0)",
          lineHeight: 40,
          fontSize: 14,
          marginRight: -20,
          width: "calc(100% + 20px)",
          textTransform: "none",
          borderWidth: "initial",
          borderStyle: "none",
          borderColor: "initial",
          borderImage: "initial",
          background: "none transparent",
          padding: "0px 76px 0px 16px",
          outline: "none",
          ...(styles.select || {})
        }}
        {...props}
      >
        {children}
      </select>
      <div
        css={{
          width: 30,
          height: "100%",
          position: "absolute",
          right: 0,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid rgb(234, 234, 234)",
          background: "rgb(255, 255, 255)",
          transition: "border 0.2s ease 0s",
          ...(styles.icon || {})
        }}
      >
        <svg
          width="7"
          height="17"
          viewBox="0 0 7 12"
          fill="none"
          aria-label="arrow double"
        >
          <path
            d="M0.642491 3.35053L0.292945 3.70804L1.00798 4.40714L1.35752 4.04962L0.642491 3.35053ZM3.75752 1.59491L4.10707 1.23739L3.39204 0.538299L3.04249 0.895815L3.75752 1.59491ZM5.58506 4.04651L5.93149 4.40704L6.65256 3.71417L6.30613 3.35364L5.58506 4.04651ZM3.95354 0.9053L3.6071 0.544767L2.88604 1.23763L3.23247 1.59817L3.95354 0.9053ZM1.35752 7.95041L1.00797 7.59289L0.292938 8.29198L0.642485 8.6495L1.35752 7.95041ZM3.04248 11.1042L3.39203 11.4617L4.10706 10.7626L3.75751 10.4051L3.04248 11.1042ZM6.36054 8.64636L6.70697 8.28583L5.98591 7.59296L5.63947 7.95349L6.36054 8.64636ZM3.28688 10.4018L2.94045 10.7624L3.66152 11.4552L4.00795 11.0947L3.28688 10.4018ZM1.35752 4.04962L3.75752 1.59491L3.04249 0.895815L0.642491 3.35053L1.35752 4.04962ZM6.30613 3.35364L3.95354 0.9053L3.23247 1.59817L5.58506 4.04651L6.30613 3.35364ZM0.642485 8.6495L3.04248 11.1042L3.75751 10.4051L1.35752 7.95041L0.642485 8.6495ZM5.63947 7.95349L3.28688 10.4018L4.00795 11.0947L6.36054 8.64636L5.63947 7.95349Z"
            fill="#000"
          />
        </svg>
      </div>
    </div>
  );
}

export { Button, Card, Input, Select };
