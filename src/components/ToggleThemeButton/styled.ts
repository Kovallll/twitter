import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    right: 12px;
    width: 60px;
    height: 30px;
    margin: 0;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    border: 1px solid gray;

    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 1.5px;
        border-radius: 50%;
        width: 25px;
        height: 24px;
        transition: transform 0.25s;
        right: 2px;
        border: 1px solid gray;
    }
`
