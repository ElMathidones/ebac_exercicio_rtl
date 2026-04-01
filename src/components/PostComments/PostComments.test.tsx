import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

describe('PostComments', () => {
    it('deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);
        
        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-button');
        
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário de teste' } });
        fireEvent.click(button);
        
        fireEvent.change(textarea, { target: { value: 'Segundo comentário de teste' } });
        fireEvent.click(button);
        
        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
        
        expect(comments[0]).toHaveTextContent('Primeiro comentário de teste');
        expect(comments[1]).toHaveTextContent('Segundo comentário de teste');
        
        expect(textarea).toHaveValue('');
    });
});