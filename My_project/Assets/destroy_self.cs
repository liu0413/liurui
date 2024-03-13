using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class destroy_self : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float xPosition = transform.position.x;
        float yPosition = transform.position.y;
        float zPosition = transform.position.z;
        Debug.Log("x"+xPosition);
        Debug.Log("y"+yPosition);

        Debug.Log("z"+zPosition);

        if (yPosition < 0)
        {
            Destroy(gameObject, 2.0f);
        }
        
    }
}
