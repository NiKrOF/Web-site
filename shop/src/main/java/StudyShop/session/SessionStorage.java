package StudyShop.session;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Component
public class SessionStorage
{
    private Map<String, Cart> SessionsMap;
    public SessionStorage() {SessionsMap = new HashMap<>();}
    public Cart GetData(HttpSession session)
    {
        String sessId = session.getId();
        Cart data = SessionsMap.get(sessId);
        if(data == null){data = new Cart();SessionsMap.put(sessId, data);}
        return data;
    }
}
