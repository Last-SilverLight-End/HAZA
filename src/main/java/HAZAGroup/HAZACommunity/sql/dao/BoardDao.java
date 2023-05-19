package HAZAGroup.HAZACommunity.sql.dao;

import HAZAGroup.HAZACommunity.rest.board.model.BoardVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoardDao {
    // delete board
    public static int deleteBoardList(int id, SqlSession sqlSession) throws Exception {
        System.out.println("id = " + id);
        return sqlSession.delete("board.getDeleteBoard", id);
    }

    // create board
    public static int insertBoardList(BoardVo boardVo, SqlSession sqlSession) throws Exception {
        System.out.println("boardVo = " + boardVo);
        return sqlSession.insert("board.insertBoardList", boardVo);
    }

    // all board data
    public List<BoardVo> getBoardLists(SqlSession sqlSession) throws Exception {
        System.out.println(" dao sqlSession = " + sqlSession);
        return sqlSession.selectList("board.getBoardLists");
    }

    // board mainCategory id lists
    public List<BoardVo> getSpecificMainCategoryBoardLists(int mainCategoryId, SqlSession sqlSession) throws Exception {
        System.out.println("mainCategoryId = " + mainCategoryId);
        return sqlSession.selectList("board.getSpecificMainCategoryBoardLists", mainCategoryId);
    }

    // board detail id
    public List<BoardVo> getSpecificBoardLists(int id, SqlSession sqlSession) throws Exception {
        System.out.println("id = " + id);
        return sqlSession.selectList("board.getSpecificBoardLists", id);
    }

    // modify board
    public static int modifyBoardList(BoardVo boardVo, SqlSession sqlSession) throws Exception {
        System.out.println("boardVo = " + boardVo);
        return sqlSession.insert("board.modifyBoardList", boardVo);
    }

    // modifyBoard id
    public int modifydfdBoardList(int id, SqlSession sqlSession) throws Exception {
        System.out.println("id = " + id);
        return sqlSession.insert("board.getDeleteBoard", id);
    }


}
