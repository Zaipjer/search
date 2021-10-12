import styled from 'styled-components';

export const GoogleInput = styled.div`
    display: flex;
    align-items:center;
    border: 1px solid lightgray;
    height: 25px;
    padding: 10px 20px;
    border-radius: 999px;
    width: 65vw;
    max-width: 550px;
    margin: 0 auto;
    margin-top: 25px;

    &:hover{
        -webkit-box-shadow: 0px 2px 4px 3px rgba(232, 232, 232, 0.7);
        box-shadow: 2px 2px 4px 3px rgba(232, 232, 232, 0.7);
    }

    & > .search__inputIcon{
        color: gray;
    }

    & > input{
        flex: 1;
        padding: 10px 20px;
        font-size: medium;
        border: none;
    }

    & > input:focus{
        outline-width: 0;
    }
`